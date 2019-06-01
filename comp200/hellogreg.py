x = 10
yello = 20
z = x + yello
print(z)

mystring = 'gregory'

x = mystring[::-2]

print("my name is {}".format(x))

print(f"name is {x}")

mylist = [1, 2, 3, 4]  # list or array in []

print(mylist[1:2])

mylist.append(100)

mylist.insert(1, 23)

mylist.pop(0)

mylist2 = [4, 5, 6]

metalist = [mylist, mylist2]

print(metalist)

print(metalist[1][1])

mydict = {'greg': [10, 20], 'Larry': [30, 40]}

print(mydict['Larry'][1])  # this is called a 'Stacked call'

mydict2 = {'greg': [10, 20], 'Larry': {'wages': [30, 40]}}

print(mydict2['Larry']['wages'][1])

mydict2.update({'allan': 2})

mydict2['item4'] = 20

print(mydict2)

mytuple = (1, 2, 3)  # tuples are immutable

myset = set()  # sets are unique values in {1, 2, 3} but no key value pairs.
print(myset)
myset.add(1)
print(myset)
myset.add(2)
print(myset)

# use sets to identify unique elements in a list

x = [1, 2, 3, 3, 3]

print(set(x))

#  booleans
a = True
b = False
c = None



	