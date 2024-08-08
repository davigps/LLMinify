import time


def get_timestamp_string() -> str:
    return str(time.time()).replace(".", "_")
