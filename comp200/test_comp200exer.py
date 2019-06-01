# all tests for comp 200

import comp200exer
import taxcalc



# test for 200
def test_email():
    assert comp200exer.email('Greg', 'Freson') == 'greg.freson@evolveu.ca'

# test for comp200 exer 1
def test_currentBracket():
    assert taxcalc.currentBracket(100000, 3) == 1232.66
    assert taxcalc.currentBracket(0, 1) == 0
    assert round(taxcalc.currentBracket(50000, 2), 2) == 485.85

def test_fullBrackets():
    assert taxcalc.fullBrackets(1) == 0
    assert taxcalc.fullBrackets(2) == 7144.5
    assert taxcalc.fullBrackets(3) == 16908.445

def test_calcTax():
    assert taxcalc.calcTax(0) == 0
    assert taxcalc.calcTax(50000) == 7630.35
    assert taxcalc.calcTax(250000) == 61796.255

