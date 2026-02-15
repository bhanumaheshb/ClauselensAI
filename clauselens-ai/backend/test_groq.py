import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

try:
    completion = client.chat.completions.create(
        # Updated Model Name
        model="llama-3.2-11b-vision-instant", 
        messages=[{"role": "user", "content": "Hello, are you active?"}]
    )
    print("✅ Groq is working! Response:", completion.choices[0].message.content)
except Exception as e:
    print("❌ Groq Error:", str(e))