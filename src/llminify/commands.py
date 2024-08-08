import click

from llminify.handlers import list_llms_handler, run_llm_handler, run_terser_handler


@click.command(help="List all available LLMs.")
def list_llms():
    list_llms_handler.handle()


@click.command(help="Minify a JavaScript project using Terser.")
def terser():
    run_terser_handler.handle()


@click.command(help="Minify a JavaScript project using a specific LLM.")
def llm():
    run_llm_handler.handle()


@click.group()
def app():
    pass


app.add_command(terser)
app.add_command(llm)
app.add_command(list_llms)
