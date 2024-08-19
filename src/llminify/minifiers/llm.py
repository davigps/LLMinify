import os

from langchain_core.output_parsers import StrOutputParser
from llminify.available_models import get_model
from llminify.minifiers.base import BaseMinifier
from llminify.minifiers.terser import TerserMinifier
from llminify.templates.minifier import minifier_prompt
from llminify.templates.optimizer import optimizer_prompt
from llminify.utils.timestamp import get_timestamp_string


class LlmMinifier(BaseMinifier):
    def __init__(self, model: str) -> None:
        self.terser_minifier = TerserMinifier()
        super().__init__(model)

    def _save_on_temp_file(self, content: str) -> str:
        file_path = f"./tmp-{get_timestamp_string()}"
        with open(file_path, "w") as f:
            f.write(content)
        return file_path

    def minify_file(self, file_path: str) -> str:
        content = self._read_file(file_path)
        minified = self._minify_with_model(content)

        tmp_file_path = self._save_on_temp_file(minified)

        minified = self._minify_with_terser(tmp_file_path)
        os.remove(tmp_file_path)

        return minified

    def _minify_with_model(self, content: str) -> str:
        model = get_model(self.tool_name)

        optimize_chain = optimizer_prompt | model
        minify_chain = minifier_prompt | model

        overall_chain = optimize_chain | minify_chain | StrOutputParser()
        output = overall_chain.invoke(input={"code": content})

        return output

    def _minify_with_terser(self, file_path: str) -> str:
        return self.terser_minifier.minify_file(file_path)
