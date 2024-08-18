import os

from llminify.file_explorer import get_all_files_from_dir
from llminify.utils.timestamp import get_timestamp_string


class BaseMinifier:
    def __init__(self, tool_name: str) -> None:
        self.tool_name = tool_name

    def minify_file(self, file_path: str) -> str:
        raise NotImplementedError()

    def _get_output_dir_path(self, input_dir_path: str):
        input_folder_name = os.path.basename(input_dir_path)

        path = os.path.join(input_dir_path, "..")
        new_folder_name = (
            f"{get_timestamp_string()}-{self.tool_name}-{input_folder_name}"
        )
        path = os.path.join(path, new_folder_name)

        return path

    def _read_file(self, file_path: str) -> str:
        content = None
        with open(file_path, "r") as file:
            content = file.read()
        return content

    def _save_file(self, content: str, output_path: str) -> None:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        with open(output_path, "w") as file:
            file.write(content)

    def _copy_file(self, from_path: str, to_folder: str) -> None:
        os.makedirs(to_folder, exist_ok=True)

        to_path = os.path.join(to_folder, os.path.basename(from_path))

        os.system(f"cp '{from_path}' '{to_path}'")

    def minify_files(self, project_dir_path: str) -> str:
        project_out_path = self._get_output_dir_path(project_dir_path)
        files = get_all_files_from_dir(project_dir_path)

        for file_path in files:
            file_extension = os.path.splitext(file_path)[1]

            relative_path = os.path.relpath(file_path, project_dir_path)
            destination_file_path = os.path.join(project_out_path, relative_path)

            if not file_path.endswith(".min.js") and file_extension == ".js":
                content = self.minify_file(file_path)
                self._save_file(content, destination_file_path)
            else:
                self._copy_file(file_path, os.path.dirname(destination_file_path))

        return project_out_path
