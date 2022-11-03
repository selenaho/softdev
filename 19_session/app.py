from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session

app = Flask(__name__)    #create Flask object

username="user"
password="pass"


@app.route("/", methods=['GET', 'POST'])
def disp_loginpage():
    return render_template( 'login.html' )


@app.route("/response", methods=['GET', 'POST'])
def authenticate():
    print(request.form)
    if(request.method == 'GET'):
        if(request.args.get('username')== username):
            if(request.args.get('password')==password):
                return render_template('response.html', message="Congrats on logging in", Method = request.method)
            else:
                return render_template('response.html', message="Incorrect password", Method = request.method)    
        else:
            return render_template('response.html', message="Wrong Username", Method = request.method)
    
    #response to a form submission


    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
