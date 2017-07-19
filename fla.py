from flask import Flask, render_template
app = Flask(__name__)
@app.route("/myname/<name>/<fact>")
def index(name ,fact):
	return render_template ("index.html", title="Ribhy", name=name ,fact=fact)
@app.route("/myname/<name>")
def indexx(name):
	return render_template("index.html", title="Ribhy", name=name)
@app.route("/code.html")
def code():

	return 	render_template("code.html")
@app.route('/example')
def example():
	mylist=[jason,vin,kate,meagan,reily]
	display=True
	return render_template("example.html", display=display, list=mylist )
if __name__ == '__main__': 
	app.run()
