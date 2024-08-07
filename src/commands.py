import click


@click.command(help="List all available LLMs.")
def list_llms():
    click.echo("Available LLMs:")


@click.command(help="List all available projects to be minified.")
def list_projects():
    click.echo("Available projects:")


@click.command(help="Minify a JavaScript project using Terser.")
def terser():
    click.echo("Minifying with Terser...")


@click.command(help="Minify a JavaScript project using a specific LLM.")
def llm():
    click.echo("Minifying with LLM...")


@click.group()
def app():
    pass


app.add_command(terser)
app.add_command(llm)
app.add_command(list_llms)
app.add_command(list_projects)
