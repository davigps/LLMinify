import os
import time
from typing import Callable, Optional, TypeVar

from langchain_core.output_parsers import StrOutputParser
from llminify.available_models import get_model
from llminify.minifiers.base import BaseMinifier
from llminify.minifiers.terser import TerserMinifier
from llminify.templates.minifier import minifier_prompt
from llminify.utils.log import logger
from llminify.utils.timestamp import get_timestamp_string

T = TypeVar("T")


class LlmMinifier(BaseMinifier):
    MAX_RETRIES = 5

    def __init__(
        self,
        model: str,
        use_terser: bool,
        excluded_folders: list[str],
        ignore_failed: bool,
    ) -> None:
        self.terser_minifier = TerserMinifier(excluded_folders)
        self.use_terser = use_terser
        self.ignore_failed = ignore_failed
        super().__init__(model, excluded_folders)

    def _retry_action_if_needed(
        self, action: Callable[..., T], *args, **kwargs
    ) -> Optional[T]:
        last_exception = RuntimeError("Max retries reached")

        for _ in range(self.MAX_RETRIES):
            try:
                return action(*args, **kwargs)
            except Exception as e:
                last_exception = e

                sleep_time = 1
                if "429" in str(last_exception):
                    sleep_time = 35
                time.sleep(sleep_time)

                logger.warning(
                    f"Retrying {action.__name__} after {sleep_time} seconds due to error: {e}"
                )

        if not self.ignore_failed:
            raise last_exception

        logger.warning("Failed to minify file...")
        return None

    def _save_on_temp_file(self, content: str) -> str:
        file_path = f"./tmp-{get_timestamp_string()}"
        with open(file_path, "w") as f:
            f.write(content)
        return file_path

    def minify_file(self, file_path: str) -> str:
        content = self._read_file(file_path)

        def use_llm_and_terser():
            logger.info(f"Minifying {file_path}...")

            minified = self._minify_with_model(content)

            tmp_file_path = self._save_on_temp_file(minified)
            try:
                minified = self._minify_with_terser(tmp_file_path)
            finally:
                os.remove(tmp_file_path)

            return minified

        minified_file = self._retry_action_if_needed(use_llm_and_terser)
        if minified_file is None:
            minified_file = content

        return minified_file

    def _minify_with_model(self, content: str) -> str:
        model = get_model(self.tool_name)

        minify_chain = minifier_prompt | model | StrOutputParser()
        output = minify_chain.invoke(input={"code": content})

        return output

    def _minify_with_terser(self, file_path: str) -> str:
        if not self.use_terser:
            return self._read_file(file_path)

        return self.terser_minifier.minify_file(file_path)
