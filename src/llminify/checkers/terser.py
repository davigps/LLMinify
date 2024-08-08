import subprocess


def check_terser_is_available() -> bool:
    result = subprocess.run(
        ["npx", "terser", "--version"], capture_output=True, text=True
    )
    return result.returncode == 0
