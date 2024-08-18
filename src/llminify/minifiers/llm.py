from langchain.chains.llm import LLMChain
from langchain.chains.sequential import SimpleSequentialChain
from llminify.available_models import get_model
from llminify.minifiers.base import BaseMinifier
from llminify.templates.minifier import minifier_prompt
from llminify.templates.optimizer import optimizer_prompt


class LlmMinifier(BaseMinifier):
    def __init__(self, model: str) -> None:
        super().__init__(model)

    def minify_file(self, file_path: str) -> str:
        model = get_model(self.tool_name)

        optimize_chain = LLMChain(llm=model, prompt=optimizer_prompt)
        minify_chain = LLMChain(llm=model, prompt=minifier_prompt)

        overall_chain = SimpleSequentialChain(
            chains=[optimize_chain, minify_chain], verbose=True
        )

        content = self._read_file(file_path)
        output = overall_chain.run(content)

        return output
