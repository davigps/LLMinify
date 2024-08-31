import subprocess

from llminify.utils.log import logger


def check_cyclomatic_complexity_is_available() -> None:
    logger.info("Checking if cyclomatic-complexity is available...")

    result = subprocess.run(
        ["npx", "cyclomatic-complexity", "--help"], capture_output=True, text=True
    )

    if result.returncode != 0:
        logger.error("Cyclomatic-complexity is not available. Aborting...")
        logger.info("Install NPM, so cyclomatic-complexity can be ran with `npx` tool.")
        exit(-1)
