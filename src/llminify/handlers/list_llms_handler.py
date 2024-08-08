from llminify.available_models import AVAILABLE_MODELS
from llminify.utils.log import logger


def handle():
    logger.info("Available LLMs:")
    for model in AVAILABLE_MODELS:
        logger.info(f"- '{model}'")

    logger.info("")
    logger.info("To minify a project, run the following command:")
    logger.info(
        "pdm run start llm <model-name-here> --project <project-folder-name-here>"
    )
