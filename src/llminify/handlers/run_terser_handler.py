from llminify.checkers.terser import check_terser_is_available
from llminify.minifiers.terser import TerserMinifier
from llminify.utils.log import logger


def handle(project_dir_path: str, exclude: str):
    check_terser_is_available()

    logger.info(f"Minifying with Terser on {project_dir_path}...")

    excluded_folders = exclude.split(",") if exclude else []
    logger.info(f"Excluded folders: {', '.join(excluded_folders)}")

    output_path = TerserMinifier(excluded_folders).minify_files(project_dir_path)

    logger.info(
        f"Minification completed successfully. Output available at {output_path}"
    )
