from flask import Flask
from flask_mail import Mail
from flask_cors import CORS

import os
from dotenv import load_dotenv
load_dotenv()

class Config:
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = os.environ.get('MAIL_PORT')
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
    
 



