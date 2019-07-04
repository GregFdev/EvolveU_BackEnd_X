# tests for comp 220

import comp220exer_1
import comp220exer_2
import comp220exer_3

def test_getnumfiles():

    assert(comp220exer_2.getnumfiles('.')) == 9

# had to comment out test as it kept changing file sizes
# def test_getdirsize():

    # assert(comp220exer_2.getdirsize('.')) == 2582450


