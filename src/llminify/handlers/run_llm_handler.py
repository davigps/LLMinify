from llminify.checkers.terser import check_terser_is_available
from llminify.utils.log import logger


def handle():
    logger.info("Checking if Terser is available...")
    can_start = check_terser_is_available()

    if not can_start:
        logger.error("Terser is not available. Aborting...")
        logger.info("Install NPM, so Terser can be ran with `npx` tool.")
        exit(-1)

    logger.info("Minifying with LLM...")
