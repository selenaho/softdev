'''
TNPG: Go Jose!
Gordon Mo, Joshua Liu, Selena Ho
SoftDev
K19 -- Using session from flask to work on logging in, remaining logged in, and logging out
2022-11-03
time spent: 1.5
'''
from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session

app = Flask(__name__)    #create Flask object

username="user"
password="pass"

app.secret_key = 'foo'

@app.route("/", methods=['GET', 'POST'])
def disp_loginpage():
    if ('username' in session): #user was logged in and didn't log out
        return render_template('response.html', Message="You were already logged in")
    else: 
        return render_template( 'login.html' ) #user wasn't logged in and is sent to login page


@app.route("/response", methods=['GET', 'POST'])
def authenticate():
    print(request.form)
    if(request.method == 'GET'):
        if(request.args.get('username')== username):
            if(request.args.get('password')==password):
                session['username'] = request.args.get('username')
                return render_template('response.html', Message="Congrats on logging in", Method_message = "The request method we used was " + str(request.method))
            else:
                return "Wrong password"    
        else:
            return "Wrong username"
    else: #using POST method here
        if(request.form.get('username')== username):
            if(request.form.get('password')==password):
                session['username'] = request.form.get('username')
                return render_template('response.html', Message="Congrats on logging in", Method_message = "The request method we used was " + str(request.method))
            else:
                return "Wrong password"    
        else:
            return "Wrong username"
    
@app.route("/logout")
def logout():
    session.pop('username', None) #removes the value for username from the session
    #print("log")
    return render_template("login.html")


    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
