import click

from llminify.available_models import DEFAULT_MODEL
from llminify.handlers import (
    list_llms_handler,
    run_llm_handler,
    run_terser_handler,
    js_handler,
)


@click.command(help="List all available LLMs.")
def list_llms():
    list_llms_handler.handle()


@click.command(
    help="Get the size of a JavaScript project folder. Provide the directory project path."
)
@click.argument(
    "folder_path",
    type=click.Path(exists=True, file_okay=False, dir_okay=True, readable=True),
    required=True,
)
def js_size(folder_path: str):
    js_handler.handle_js_files_sizes(folder_path)


@click.command(
    help="Get the cyclomatic complexity of a JavaScript project folder. Provide the directory project path."
)
@click.argument(
    "folder_path",
    type=click.Path(exists=True, file_okay=False, dir_okay=True, readable=True),
    required=True,
)
def js_complexity(folder_path: str):
    js_handler.handle_js_complexity(folder_path)


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
    default=DEFAULT_MODEL,
    help=f"A model name available. The default model is {DEFAULT_MODEL}",
)
@click.option(
    "--verbose",
    is_flag=True,
    default=False,
    help="Show the output of the LLM in the console.",
)
def llm(folder_path: str, model: str, verbose: bool):
    run_llm_handler.handle(folder_path, model, verbose)


@click.group()
def app():
    pass


app.add_command(terser)
app.add_command(llm)
app.add_command(list_llms)
app.add_command(js_size)
app.add_command(js_complexity)
