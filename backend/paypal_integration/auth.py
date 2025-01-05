from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("PAYPAL_SECRET_KEY")
CLIENT_ID = os.getenv("PAYPAL_CLIENT_ID")

