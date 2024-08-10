from llminify.minifiers.base import BaseMinifier


class LlmMinifier(BaseMinifier):
    def __init__(self, model: str) -> None:
        super().__init__(model)

    def minify_file(self, file_path: str) -> str:
        return self._read_file(file_path)
