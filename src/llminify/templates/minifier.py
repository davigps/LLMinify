from langchain.prompts import PromptTemplate

content = """
You are a code minifier, you job is to minify the code provided without changing its objectives.
Pay attention:
- You should rewrite the code to be smaller
- It can be worse in readability
- You should use the same names for external functions
- You should use the same names for external variables
- You can use different indentation levels
- You can use different code structures
Only return the minified code, without any explanations or comments.

Examples of minifications:

Minify the following code:

```
function findSum(numbers) {{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {{
    sum = sum + numbers[i];
  }}
  return sum;
}}

let result = 0;
for (let i = 0; i < 1000000; i++) {{
  result += findSum([1, 2, 3, 4, 5]);
}}
console.log(result);
```

Minified code:

function findSum(n){{let s=0;for(let i=0;i<n.length;)s+=n[i++];return s}}let r=0;for(let i=0;i<1e6;)r+=findSum([1,2,3,4,5]);console.log(r)


Minify the following code:

```
{code}
```
"""

minifier_prompt = PromptTemplate(
    input_variables=["code"], template=content, name="minifier_prompt"
)
