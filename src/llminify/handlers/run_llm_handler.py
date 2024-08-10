from llminify.checkers.terser import check_terser_is_available
from llminify.minifiers.llm import LlmMinifier
from llminify.utils.log import logger


def handle(project_dir_path: str, model: str):
    check_terser_is_available()

    logger.info(f"Minifying with LLM on {project_dir_path}...")
    output_path = LlmMinifier(model).minify_files(project_dir_path)

    logger.info(
        f"Minification completed successfully. Output available at {output_path}"
    )
