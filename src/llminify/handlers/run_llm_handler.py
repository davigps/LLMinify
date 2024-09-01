from langchain.globals import set_debug, set_verbose

from llminify.checkers.terser import check_terser_is_available
from llminify.minifiers.llm import LlmMinifier
from llminify.utils.log import logger


def handle(project_dir_path: str, model: str, verbose: bool, use_terser: bool):
    check_terser_is_available()

    if verbose:
        set_debug(True)
        set_verbose(True)

    logger.info(f"Minifying with LLM on {project_dir_path}...")
    if use_terser:
        logger.info("Using terser for minification...")

    output_path = LlmMinifier(model, use_terser).minify_files(project_dir_path)

    logger.info(
        f"Minification completed successfully. Output available at {output_path}"
    )
