from langchain_core.output_parsers import StrOutputParser
from llminify.available_models import get_model
from llminify.minifiers.base import BaseMinifier
from llminify.templates.minifier import minifier_prompt
from llminify.templates.optimizer import optimizer_prompt


class LlmMinifier(BaseMinifier):
    def __init__(self, model: str) -> None:
        super().__init__(model)

    def minify_file(self, file_path: str) -> str:
        model = get_model(self.tool_name)

        optimize_chain = optimizer_prompt | model | StrOutputParser()
        minify_chain = minifier_prompt | model | StrOutputParser()

        overall_chain = optimize_chain | minify_chain

        content = self._read_file(file_path)
        output = overall_chain.invoke(input={"code": content})

        return output
