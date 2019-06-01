# tax calc exercise comp 200

bracket = [0, 47630, 95259, 147667, 210371]
rates = [0, 0.15, 0.205, 0.26, 0.29, 0.33]


def calcTax(income):
	n = 1
	while n < 5:
		if income <= bracket[n]:
			break
		else:
			n += 1
	print(n)
	return fullBrackets(n) + currentBracket(income, n)

# calc tax payable in current bracket only
def currentBracket(inc, n):
	print('current bracket tax is ', (inc - bracket[n-1]) * rates[n])
	return (inc - bracket[n-1]) * rates[n]


# calc tax payable in all lower brackets
def fullBrackets(n):
	
	totFullBrackets = 0
	i = n

	while i > 1:
		totFullBrackets += (bracket[i-1] - bracket[i-2]) * rates[i-1]
		i -= 1
	print('full bracket tax is ', totFullBrackets)
	return totFullBrackets

# income = 0
# while income != '':
# 	income = input('Enter income')
# 	print('Fed tax is', round(calcTax(float(income)), 2))
