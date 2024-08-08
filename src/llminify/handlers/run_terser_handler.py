from llminify.checkers.terser import check_terser_is_available
from llminify.minifiers.terser import TerserMinifier
from llminify.utils.log import logger


def handle(project_dir_path: str):
    logger.info("Checking if Terser is available...")
    can_start = check_terser_is_available()

    if not can_start:
        logger.error("Terser is not available. Aborting...")
        logger.info("Install NPM, so Terser can be ran with `npx` tool.")
        exit(-1)

    logger.info(f"Minifying with Terser on {project_dir_path}...")

    output_path = TerserMinifier().minify_files(project_dir_path)

    logger.info(
        f"Minification completed successfully. Output available at {output_path}"
    )
