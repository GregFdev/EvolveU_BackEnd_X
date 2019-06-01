import os

# program to read files from a directory

def getnumfiles(p):
    numfiles = 0
   
    for x in os.listdir(path=p):
        numfiles += 1
    return numfiles


def getdirsize(p):
    dirsize = 0

    for x in os.listdir(path=p):
        dirsize += os.stat(x).st_size
    return dirsize

print(f"There are {getnumfiles('.')} files and the folder is {getdirsize('.')} in KBs")