from flask import Flask, request, render_template
app = Flask(__name__)

people = {10:{'fname':'Greg', 'lname':'Freson','age':29},
		  20:{'fname':'Lars', 'lname':'Ulrich','age':31},
		  30:{'fname':'Sandy', 'lname':'mammoth','age':30}
		 }

@app.route('/')
def hello_world():
    return 'hello world <h1>Gregory</h1><p>Hi everyone!</p><dialog>type here</dialog>'

@app.route('/admin')
@app.route('/admin/')
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=None):
	# print('people:', people)
	# print ('my id is:', int(myid))
	return render_template("person.html",
		testval="Some Value So We know it works", 
		person=people.get(int(myid),{'fname':'Who Knows'}))



@app.route("/info")
def info():
	print('Args:', request.args)
	return "Hello World! - info - Greg " + request.args.get('parm1','default1') 


@app.route('/update')
def update():
    print('Args:', request.args)
    myid = request.args.get('myid')
    return "person requested is " + str(people.get(int(myid),{'fname':'Who Knows'}))

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


