from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import logging
import smtplib

# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'  # Correct SMTP server for Gmail
# EMAIL_PORT = 587  # Correct port for Gmail
# EMAIL_USE_TLS = True
# EMAIL_HOST_USER = 'joesdevil10@gmail.com'  # Your Gmail email
# EMAIL_HOST_PASSWORD = 'aoud gvmn kpqn auja'  # Your Gmail password
# DEFAULT_FROM_EMAIL = 'joesdevil10@gmail.com'


app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailData(BaseModel):
    email:str
    subject: str
    body: str

@app.post("/send-email/")
def main(email_data: EmailData):
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'joesdevil10@gmail.com'
    smtp_password = 'aoud gvmn kpqn auja'

    # Connect to the SMTP server
    
    try:
        # Your existing code for sending emails
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)

            # Compose the email
            message = f"Subject: {email_data.subject}\n\n{email_data.body}"

            # Send the email
            server.sendmail(smtp_user, email_data.email, message)
        
            print("Email sent successfully", email_data)
        return {"message": "Email sent successfully"}
    except Exception as e:
        
        raise HTTPException(status_code=500, detail=str(e))
