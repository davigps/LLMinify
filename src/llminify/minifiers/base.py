import os

from llminify.file_explorer import get_all_files_from_dir
from llminify.utils.timestamp import get_timestamp_string


class BaseMinifier:
    def __init__(self, tool_name: str) -> None:
        self.tool_name = tool_name

    def _get_output_dir_path(self, input_dir_path: str):
        input_folder_name = os.path.basename(input_dir_path)

        path = os.path.join(input_dir_path, "..")
        new_folder_name = (
            f"{get_timestamp_string()}-{self.tool_name}-{input_folder_name}"
        )
        path = os.path.join(path, new_folder_name)

        return path

    def minify_string(self, content: str) -> str:
        return content

    def minify_file(self, file_path: str) -> str:
        content = None
        with open(file_path, "r") as file:
            content = file.read()

        return self.minify_string(content)

    def _save_file(self, content: str, output_path: str) -> None:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        with open(output_path, "w") as file:
            file.write(content)

    def minify_files(self, project_dir_path: str) -> str:
        project_out_path = self._get_output_dir_path(project_dir_path)
        files = get_all_files_from_dir(project_dir_path)

        for file_path in files:
            minified_content = self.minify_file(file_path)

            relative_path = os.path.relpath(file_path, project_dir_path)
            minified_file_path = os.path.join(project_out_path, relative_path)
            self._save_file(minified_content, minified_file_path)

        return project_out_path
