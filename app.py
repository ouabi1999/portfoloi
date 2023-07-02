from flask_mail import Mail, Message
from flask  import request, json
from  back_end.api.main import create_app, mail
app = create_app()

import os
@app.route("/send_mail", methods=["POST"])
def index():
    request_data = json.loads(request.data)
    email = request_data["email"]
    message = request_data["message"]
    fullName = request_data["fullName"]
    mail_message = Message(
        f"Message from  {fullName} , His email:{email}!", 
        sender = os.environ.get('MAIL_USERNAME'), 
        recipients = ['ouabiabdessamad@gmail.com'])
    mail_message.body = message
    mail.send(mail_message)
    return "Mail has sent"

if __name__ == '__main__':
     app.run(debug = True)