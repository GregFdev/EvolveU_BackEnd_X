# invoice_app.py for comp 250

from flask import Flask, render_template, url_for, redirect, request, jsonify, json
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate  

app = Flask(__name__)

DB_URL = 'postgres://postgres:secret@localhost:5432/invoices'

app.config['SECRET_KEY'] = 'invoices'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL

db=SQLAlchemy(app)
migrate = Migrate(app, db)


###################################
#####  MODELS   ##################
##################################

class Invoice(db.Model):
    __tablename__ = 'Invoices'

    inv_num = db.Column(db.Integer, primary_key=True) # unique and auto created
    inv_date = db.Column(db.Date)

    # one - to one relationship between invoice and customer
    # cust_id = db.Column(db.Integer, db.ForeignKey('Customers.cust_name'))
    cust_id = db.Column(db.Integer)
    # customer = db.relationship('Customer',backref='invoice',lazy='dynamic')
        
    inv_products = {}
    
    def __init__(self, cust_id, inv_date):
        self.cust_id = cust_id
        self.inv_date = inv_date

    def serialize(self):
        return {'inv_num': self.inv_num, 'date': self.inv_date, 'cust_id': self.cust_id}


class Customer(db.Model):
    __tablename__ = "Customers"

    cust_id = db.Column(db.Integer, primary_key=True)
    cust_name = db.Column(db.Text)

    def __init__(self, cust_name):
        self.cust_name = cust_name
        
    def serialize(self):
        return {'cust_id': self.cust_id, 'cust_name': self.cust_name}

class Product(db.Model):
    __tablename__ = "Products"

    prod_id = db.Column(db.Integer, primary_key=True)
    prod_name = db.Column(db.Text)
    prod_cost = db.Column(db.Float)

    # inv_num = db.Column(db.Integer,db.ForeignKey('Invoices.inv_num'))

    def __init__(self, prod_name, prod_cost):
        self.prod_name = prod_name
        self.prod_cost = prod_cost

    def serialize(self):
        return {'prod_id': self.prod_id, 'prod_name': self.prod_name, 'prod_cost': self.prod_cost}


class Line_Item(db.Model):
    __tablename__ = "Line_Items"

    id = db.Column(db.Integer, primary_key=True)
    inv_num = db.Column(db.Integer)
    prod_id = db.Column(db.Integer)
    qty = db.Column(db.Integer)

    def __init__(self, inv_num, prod_id, qty):
        self.inv_num = inv_num
        self.prod_id = prod_id
        self.qty = qty

    def serialize(self):
        return {'prod_id': self.prod_id, 'qty': self.qty, 'inv_num': self.inv_num}


###############################################
######  Routings  #####################
###############################################

@app.route('/invoices2', methods=['GET'])
def invoices2():
    invoice_list = Invoice.query.all()
    inv_ser_list = [inv.serialize() for inv in invoice_list]
    # print('ser inv list is ', inv_ser_list)
    resp = jsonify(inv_ser_list)
    # print('---json---:', resp.response)
    return resp, 200

@app.route('/products', methods=['GET'])
def products():
    prod_list = Product.query.all()
    resp = jsonify([prod.serialize() for prod in prod_list])
    return resp, 200

@app.route('/addproduct', methods=['POST', 'GET'])
def add_product():
    content = request.get_json()
    print('Update:', request, content)
    print('About to add product name:', content['newProduct']['prod_name'],
        "and invoice ", content['invNum'], 'and customer ', content['custNum'])
    new_prod = Product(content['newProduct']['prod_name'], content['newProduct']['prod_cost'])

    # add to dbase
    db.session.add(new_prod)
    db.session.commit()
    
    new_line = Line_Item(content['invNum'], new_prod.prod_id, content['newProduct']['qty'])
    print('new line to be added is ', new_line.serialize())
    db.session.add(new_line)
    db.session.commit()
    return jsonify({'worked':'ok'}), 200



@app.route('/invoice_details/<inv_num>', methods=['GET'])
def invoice_details(inv_num=None):
    lines = Line_Item.query.filter_by(inv_num=inv_num).all()
    # print(f'lines are v4 {lines}')
    invoice = Invoice.query.filter_by(inv_num=inv_num).first()
    # print('invoice cust id is ', invoice.cust_id)

    customer = Customer.query.filter_by(cust_id=invoice.cust_id).first()
    # print('cust ', customer)
    total = 0
    products = []
    for line in lines:
        # print('line is' ,line)
        # print('line.prod_id is ',line.prod_id,' ')
        currprodobj = Product.query.filter_by(prod_id=line.prod_id).first()
        total += line.qty*currprodobj.prod_cost
        currprod = currprodobj.serialize()
        currprod['qty'] = line.qty
        # print('curr prod is ', currprod)
        products.append(currprod)
        
    inv_json = {'Invoice': invoice.serialize(), 'Customer': customer.serialize(), 'Products': products, 'TotalCost': total}
    # print('inv json is ', inv_json)
    resp = jsonify(inv_json)
    # print('products in invoice are ', products)
    # print('---json---:', resp.response)
    return resp, 200


if __name__ == '__main__':
    
    app.run(host='0.0.0.0', debug=True)
