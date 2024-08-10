import os

from llminify.utils.log import logger


def check_terser_is_available() -> None:
    logger.info("Checking if Terser is available...")

    command_result = os.system("npx terser --version")

    if command_result != 0:
        logger.error("Terser is not available. Aborting...")
        logger.info("Install NPM, so Terser can be ran with `npx` tool.")
        exit(-1)
