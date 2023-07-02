from flask_mail import Mail
from flask import Flask
from ..config import Config
from flask_cors import  cross_origin, CORS
from flask_socketio import SocketIO
cors = CORS()
mail = Mail()
socketio = SocketIO()

def create_app(config_class=Config):
    app = Flask(__name__,  static_folder="../../front-end/build", static_url_path='/', template_folder='../templates', instance_relative_config=True) 

    socketio.init_app(app, cors_allowed_origins = "*")

    app.config.from_object(config_class)
    cors.init_app(app, supports_credentials=True)
    mail.init_app(app)
    return app