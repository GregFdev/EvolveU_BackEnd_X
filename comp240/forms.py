from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,SubmitField, DateField

class AddInvoice(FlaskForm):

    inv_num = IntegerField('Invoice Number: ')
    
