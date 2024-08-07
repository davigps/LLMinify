import click


@click.command(help="Minify a JavaScript project using Terser.")
def terser():
    click.echo("Minifying with Terser...")


@click.command(help="Minify a JavaScript project using a specific LLM.")
def llm():
    click.echo("Minifying with LLM...")


@click.command(help="List all available LLMs")
def list_llms():
    click.echo("Available LLMs:")


@click.group()
def app():
    pass


app.add_command(terser)
app.add_command(llm)
app.add_command(list_llms)
