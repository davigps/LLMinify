import os
from typing import Callable, TypeVar

from langchain_core.output_parsers import StrOutputParser
from llminify.available_models import get_model
from llminify.minifiers.base import BaseMinifier
from llminify.minifiers.terser import TerserMinifier
from llminify.templates.minifier import minifier_prompt
from llminify.templates.optimizer import optimizer_prompt
from llminify.utils.timestamp import get_timestamp_string
from llminify.utils.log import logger

T = TypeVar("T")


class LlmMinifier(BaseMinifier):
    MAX_RETRIES = 5

    def __init__(self, model: str) -> None:
        self.terser_minifier = TerserMinifier()
        super().__init__(model)

    def _retry_action_if_needed(self, action: Callable[..., T], *args, **kwargs) -> T:
        last_exception = RuntimeError("Max retries reached")

        for _ in range(self.MAX_RETRIES):
            try:
                return action(*args, **kwargs)
            except Exception as e:
                logger.warning(f"Retrying {action.__name__} due to error: {e}")

                last_exception = e

        raise last_exception

    def _save_on_temp_file(self, content: str) -> str:
        file_path = f"./tmp-{get_timestamp_string()}"
        with open(file_path, "w") as f:
            f.write(content)
        return file_path

    def minify_file(self, file_path: str) -> str:
        content = self._read_file(file_path)

        def use_llm_and_terser():
            minified = self._minify_with_model(content)

            tmp_file_path = self._save_on_temp_file(minified)
            minified = self._minify_with_terser(tmp_file_path)

            os.remove(tmp_file_path)
            return minified

        return self._retry_action_if_needed(use_llm_and_terser)

    def _minify_with_model(self, content: str) -> str:
        model = get_model(self.tool_name)

        optimize_chain = optimizer_prompt | model | StrOutputParser()
        minify_chain = minifier_prompt | model | StrOutputParser()

        overall_chain = optimize_chain | minify_chain
        output = overall_chain.invoke(input={"code": content})

        return output

    def _minify_with_terser(self, file_path: str) -> str:
        return self.terser_minifier.minify_file(file_path)
