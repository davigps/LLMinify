import click
from llminify.available_models import AVAILABLE_MODELS


def handle():
    click.echo("Available LLMs:")
    for model in AVAILABLE_MODELS:
        click.echo(f"- {model}")

    click.echo("\nTo minify a project, run the following command:")
    click.echo(
        "pdm run start llm <model-name-here> --project <project-folder-name-here>"
    )
