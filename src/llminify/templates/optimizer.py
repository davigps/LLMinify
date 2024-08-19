from langchain.prompts import PromptTemplate

content = """
You are a code optimizer, you job is to optimize the code provided without changing its objectives.
Pay attention:
- You should rewrite the code to be smaller
- It can be worse in readability
- You should use the same names for external functions
- You should use the same names for external variables
- You can use different indentation levels
- You can use different code structures
Only return the opmitized code, without any explanations or comments.

Examples of optimizations:

Optimize the following code:

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

Optimized code:

function findSum(numbers) {{
  return numbers.reduce((sum, num) => sum + num, 0);
}}

const numbersToSum = [1, 2, 3, 4, 5];
const precomputedSum = findSum(numbersToSum);

let result = 0;
for (let i = 0; i < 1000000; i++) {{
  result += precomputedSum;
}}
console.log(result);


Optimize the following code:

```
{code}
```

Give me only the optimized code text:
"""

optimizer_prompt = PromptTemplate(
    input_variables=["code"], template=content, name="optimizer_prompt"
)
