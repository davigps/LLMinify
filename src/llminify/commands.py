import click

from llminify.available_models import DEFAULT_MODEL
from llminify.handlers import (
    js_handler,
    list_llms_handler,
    run_llm_handler,
    run_terser_handler,
)

excluded_folders_option = click.option(
    "--exclude",
    help="Exclude folders from the minification. Default is only node_modules. Separate folders by using comma ','. Ex: --exclude node_modules,test",
    type=click.STRING,
    default="node_modules",
    show_default=True,
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
@excluded_folders_option
def terser(folder_path: str, exclude: str):
    run_terser_handler.handle(folder_path, exclude)


@click.command(help="Minify a JavaScript project using a specific LLM.")
@click.argument(
    "folder_path",
    type=click.Path(exists=True, file_okay=False, dir_okay=True, readable=True),
    required=True,
)
@excluded_folders_option
@click.option(
    "--model",
    default=DEFAULT_MODEL,
    show_default=True,
    help="A model name available.",
)
@click.option(
    "--verbose",
    is_flag=True,
    default=False,
    help="Show the output of the LLM in the console.",
)
@click.option(
    "--ignore-failed",
    is_flag=True,
    default=False,
    help="Show the output of the LLM in the console.",
)
@click.option(
    "--use-terser",
    default=True,
    type=click.BOOL,
    show_default=True,
    help="Minify the generated output with terser cli.",
)
@click.option(
    "--with-retry",
    default=True,
    type=click.BOOL,
    show_default=True,
    help="Retry minification if Terser CLI failed.",
)
def llm(
    folder_path: str,
    exclude: str,
    model: str,
    verbose: bool,
    ignore_failed: bool,
    use_terser: bool,
    with_retry: bool,
):
    run_llm_handler.handle(
        folder_path, exclude, model, verbose, ignore_failed, use_terser, with_retry
    )


@click.group()
def app():
    pass


app.add_command(terser)
app.add_command(llm)
app.add_command(list_llms)
app.add_command(js_size)
app.add_command(js_complexity)
