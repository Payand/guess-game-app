import random


def random_number():
    comp_number = random.randrange(0, 20)
    return comp_number


print(random_number())


def my_guess():
    guess = int(input("enter your number between 0 to 20 :"))
    return guess


print(my_guess())


def game_rational():
    if my_guess == random_number:
        return "you guess right!!!"
    else:
        return "you guess wrong"


print(game_rational())
