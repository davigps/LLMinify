from langchain_anthropic import ChatAnthropic
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_openai import ChatOpenAI

from llminify.utils.env import EnvConfig

DEFAULT_MODEL = EnvConfig().default_model

AVAILABLE_MODELS = {
    "claude-sonnet": lambda: ChatAnthropic(
        model_name="claude-3-5-sonnet-20240620",
        timeout=None,
        stop=None,
        base_url=None,
        api_key=None,
    ),
    "gpt4o": lambda: ChatOpenAI(
        model="gpt-4o",
    ),
}


def get_model(model_name: str) -> BaseChatModel:
    if model_name in AVAILABLE_MODELS:
        return AVAILABLE_MODELS[model_name]()

    raise ValueError(f"Unsupported model: {model_name}")
