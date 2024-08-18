import os
from dataclasses import dataclass


@dataclass
class EnvConfig:
    default_model = os.getenv("DEFAULT_MODEL", "gpt4o")
