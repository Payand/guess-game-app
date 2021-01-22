import random #import random in order to generate numbers
import simplegui


def range100():
    """
    In this function by useing method random 
    you can genarate numbers in this function ,numbers 
    between 0 to 100
    """
    
    random_100 = random.randrange(100)
    return random_100
#print(range100())

def range1000():
    """
    In this function by useing method random 
    you can genarate numbers in this function ,numbers 
    between 0 to 1000
    """
    random_1000=random.randrange(1000)
    return random_1000
#print(range1000())



def my_guess_100(num):
    if int(num) > 100 or int(num) < 0:
        return "you guess is out of range it should be between 0-100"
    elif int(num) == range100():
        return "you guess right"
    elif int(num) > range100():
        return "you guess high"
    else:
        return "you guess low"
    
def my_guess_1000(num):
    if int(num) > 1000 or int(num) < 0:
        return "you guess is out of range it should be between 0-1000"
    elif int(num) == range1000():
        return "you guess right"
    elif int(num) > range1000():
        return "you guess high"
    else:
        return"you guess low"


def out_put_100(gu):
    print(my_guess_100(gu))
    
def out_put_1000(gu):    
    print(my_guess_1000(gu))



frame = simplegui.create_frame("guess",300,300)
frame.add_input("range 100",out_put_100,100)
frame.add_input("range 1000",out_put_1000,100)



frame.start()