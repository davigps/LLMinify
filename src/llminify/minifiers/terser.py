import subprocess

from llminify.minifiers.base import BaseMinifier


class TerserMinifier(BaseMinifier):
    def __init__(self, excluded_folders: list[str]) -> None:
        super().__init__("terser", excluded_folders)

    def minify_file(self, file_path: str) -> str:
        result = subprocess.run(
            ["npx", "terser", file_path], capture_output=True, text=True
        )

        if result.returncode != 0:
            raise RuntimeError(result.stderr)

        return str(result.stdout)
