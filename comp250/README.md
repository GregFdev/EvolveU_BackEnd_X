EvolveU Comp250 Invoice manager
Note: this app was built with minimal functionality to meet EvolveU competency requirements.
Adding products does not show the change immediately in the front end.  Page must be refreshed.

Getting Started
clone repo from https://github.com/GregFdev/EvolveU_BackEnd_X/tree/master/comp250

Prerequisites
Front end at comp250/comp250_FE - built with React 16.8.6
Back end at comp250/comp250_BE - built with Python and Flask
    Python dependencies managed with miniconda - see environment.yml file
Database PostgreSQL 11


Installing
from comp250/comp250_FE  -  NPM install
    React app will run on localhost:3000

from comp250/comp250_BE  -  
    run initial dbase setup file:  
        python setup.py
    create environment:  
        conda env create -f environment.yml
        conda activate comp250env
    run app:
        python invoice_app.py
        
     

