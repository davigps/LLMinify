from llminify.minifiers.base import BaseMinifier


class TerserMinifier(BaseMinifier):
    def __init__(self) -> None:
        super().__init__("terser")
