import os


def get_all_files_from_dir(dir_path: str) -> list[str]:
    """
    Get all files from a directory and its subdirectories.
    """
    file_list = []
    for root, _, files in os.walk(dir_path):
        for file in files:
            file_list.append(os.path.join(root, file))

    return file_list
