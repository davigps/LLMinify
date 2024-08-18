from langchain.prompts import PromptTemplate

content = """
Minify the following code:

{code}

Minified code:
"""

minifier_prompt = PromptTemplate(
    input_variables=["code"],
    template=content,
)
