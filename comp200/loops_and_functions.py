#  enumerate function (grabs index of item in iterable)

x = [1, 2, 3, 4]
for item in enumerate(x):
	print(item)
for index, item in enumerate(x):
	print(index, item)

# .join function

y = ['a', 'b', 'c']

print('-x-'.join(y))
