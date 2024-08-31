import os
import subprocess
import json
from llminify.utils.log import logger
from llminify.checkers.cyclomatic_complexity import (
    check_cyclomatic_complexity_is_available,
)


def handle_js_files_sizes(folder_path: str) -> None:
    total_size = 0

    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if not file.endswith(".js"):
                continue

            file_path = os.path.join(root, file)
            file_size = os.path.getsize(file_path)

            total_size += file_size
            logger.info(f"File: {file_path}, Size: {file_size} bytes")

    logger.info(f"Total size of .js files: {total_size} bytes")


def handle_js_complexity(folder_path: str):
    check_cyclomatic_complexity_is_available()

    logger.info("Running cyclomatic-complexity analyzer...")

    complexity_results = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if not file.endswith(".js"):
                continue

            file_path = os.path.join(root, file)

            logger.info(f"Analyzing {file_path}")

            result = subprocess.run(
                ["npx", "cyclomatic-complexity", file_path, "-j"],
                capture_output=True,
                text=True,
            )

            if result.returncode != 0:
                raise RuntimeError(result.stderr)

            result = json.loads(str(result.stdout))
            complexity_results.extend(result)

    total_complexity = sum(
        [complexity.get("complexitySum", 0) for complexity in complexity_results]
    )
    logger.info(f"Total cyclomatic complexity: {total_complexity}")
