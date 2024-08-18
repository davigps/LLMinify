from langchain.prompts import PromptTemplate

content = """"
Optimize the following code without changing its objectives:

{code}

Optimized code:
"""

optimizer_prompt = PromptTemplate(
    input_variables=["code"],
    template=content,
)
