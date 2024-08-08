import logging
import time

import click

TIMESTAMP_STRING = str(time.time()).replace(".", "_")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s: %(message)s",
    filename=f"logs/{TIMESTAMP_STRING}-execution.log",
)


class AppHandler(logging.Handler):
    def emit(self, record):
        click.echo(self.format(record))


logger = logging.getLogger(__name__)
logger.addHandler(AppHandler())
