import logging

import click
from llminify.utils.timestamp import get_timestamp_string

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s: %(message)s",
    filename=f"logs/{get_timestamp_string()}-execution.log",
)


class AppHandler(logging.Handler):
    def emit(self, record):
        click.echo(self.format(record))


logger = logging.getLogger(__name__)
logger.addHandler(AppHandler())
