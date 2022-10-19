'''
	TNPG: Go Jose!
	Gordon Mo, Joshua Liu, Selena Ho
	SoftDev
	K14 -- CSS, HTML on live flask web server
	2022-10-19
	time spent: 0.3
'''
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

if __name__ == "__main__":
    app.debug = True
    app.run()