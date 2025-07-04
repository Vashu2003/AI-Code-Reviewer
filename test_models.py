import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

print("Available models for this key:")
for model in genai.list_models():
    print(f"- {model.name} | Chat: {model.supported_generation_methods}")
