# Gordon Mo, Joshua Liu, Selena Ho
# Team: Go Jose!
# SoftDev
# K12 -- Take and Give//POST Requests
# 2022-10-17
# time spent: .9

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object

@app.route("/", methods=['GET', 'POST'])
def disp_loginpage():
    return render_template( 'login.html' )


@app.route("/response", methods=['GET', 'POST'])
def authenticate():
    print(request.form)
    if(request.method == 'GET'):
        return render_template('response.html', username = request.args.get('username'), Method = request.method)
    else:
        return render_template('response.html', username = request.form.get('username'), Method = request.method)
    #response to a form submission


    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
