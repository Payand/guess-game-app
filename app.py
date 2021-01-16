import random

'''
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
'''
# list-methods
list_names = ['micheal', 'steven', 'peter']

print(list_names)
print(list_names[0])
print(len(list_names))
list_names[2] = 'Joey'
print(list_names)


def age_years(birthyear):
    return 2021 - birthyear


years = [1988, 1989, 1990, 1991]


def age_calc():
    global years
    age = []
    for year in years:
        if year < 1990:

            age.append(age_years(year))

            print(list(age))


age_calc()

age = []
for year in years:

    hello = age_years(year)
    age.append(hello)
    print(list(age))
