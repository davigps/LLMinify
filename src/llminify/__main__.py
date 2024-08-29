from dotenv import load_dotenv

import llminify.commands as commands

if __name__ == "__main__":
    load_dotenv()
    commands.app()
