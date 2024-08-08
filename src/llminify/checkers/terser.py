import os


def check_terser_is_available() -> bool:
    status = os.system("npx terser --version")
    return status == 0
