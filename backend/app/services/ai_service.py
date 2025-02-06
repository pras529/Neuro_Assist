import openai


# AI Service
def analyze_text(input_text: str):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": input_text}]
    )
    return response["choices"][0]["message"]["content"]
