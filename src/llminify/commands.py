import click

from llminify.available_models import AVAILABLE_MODELS
from llminify.handlers import list_llms_handler, run_llm_handler, run_terser_handler


@click.command(help="List all available LLMs.")
def list_llms():
    list_llms_handler.handle()


@click.command(
    help="Minify a JavaScript project using Terser. Provide the directory project path to be minified."
)
@click.argument(
    "folder_path",
    type=click.Path(exists=True, file_okay=False, dir_okay=True, readable=True),
    required=True,
)
def terser(folder_path: str):
    run_terser_handler.handle(folder_path)


@click.command(help="Minify a JavaScript project using a specific LLM.")
@click.argument(
    "folder_path",
    type=click.Path(exists=True, file_okay=False, dir_okay=True, readable=True),
    required=True,
)
@click.option(
    "--model",
    default=AVAILABLE_MODELS[0],
    help=f"A model name available. The default model is {AVAILABLE_MODELS[0]}",
)
def llm(folder_path: str, model: str):
    run_llm_handler.handle(folder_path, model)


@click.group()
def app():
    pass


app.add_command(terser)
app.add_command(llm)
app.add_command(list_llms)
