from dotenv import load_dotenv
from langchain.globals import set_debug

import llminify.commands as commands

if __name__ == "__main__":
    set_debug(True)

    load_dotenv()
    commands.app()
