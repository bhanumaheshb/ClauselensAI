import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# Configure the API
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("❌ Error: GEMINI_API_KEY not found in .env")
else:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.0-flash')

    try:
        # Simple text test
        response = model.generate_content("Hello! Are you active and ready for ClauseLens AI?")
        print("✅ Gemini is Working!")
        print(f"🤖 Response: {response.text}")
    except Exception as e:
        print(f"❌ Gemini Error: {str(e)}")