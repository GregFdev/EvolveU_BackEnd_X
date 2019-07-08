# exercise 1 calc number lines and number of charactersin html file

filename = "./syntax.html"

def numlines():
    f = open(filename, 'r')
    
    num = 0
    numelse = 0

    for line in f:
        if 'else' in line:
            numelse += 1
        
        num += 1

    print('number of lines is ', num)
    print('num of else entries is' , numelse)

    f.close()

# count num characters in file.  loops through all characters.

def numchars():
    f = open(filename, 'r')
   
    numchars = 0
    char = f.read(1)
   
    while char:
        numchars += 1
        char = f.read(1)

    print('num chars is ', numchars)
    
    f.close()


numlines()

numchars()


