import random


def random_number():
    comp_number = random.randrange(0, 20)
    return comp_number


def my_guess(guess):

    return guess


guess = int(input("enter your number between 0 to 20 :"))


def game_rational():
    if my_guess(guess) == random_number():
        return "you guess right!!!"
    elif my_guess(guess) > random_number():
        return "you guess high " + str(random_number()) + " is computer choice"
    else:
        return "you guess low " + str(random_number()) + " is computer choice"


print(game_rational())
