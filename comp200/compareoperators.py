# comparison ops

# print(1 == 2 or 3 > 4 or 5 > 6)

logged_in = False
print(1 == 1 and logged_in)  # only True and True will return True

print(False is False)  # do not use False == False

admin = False
if logged_in and admin:
	print('youre in!')
elif logged_in and not admin:
	print('only admin can login')
else:
	print('piss off')
