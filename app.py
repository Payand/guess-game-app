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


# methods in python
friends = ['Joey', 'Racheal', 'Ross', 'monica']

# add elemnets method

friends.append('pheebi')
print(friends)
print(len(friends))
friends.insert(0, 'mike')
print(friends)


# remove element method
friends.pop()  # no index means last element removed
print(friends)
indexross = friends.index("Ross")
print(indexross)
print("monica" in friends)


ali = {
    'firstname': 'Ali',
    'lastname': 'Shooshtari',
    'birthyear': 2020 - 1989,
    'job': 'Hacker',
    'friends': ['Joey', 'Ross', 'Chandler'],

}
print(ali)
print(ali.keys())
print(ali.values())
print(ali.items())
for x in ali.values():
    print(x)
ali['secondjob'] = "developer"
print(ali)
print(len(ali.get("friends")))


print((str(ali["firstname"]) + " has " + str(len(ali.get("friends")))) +
      " best friends" + " ,and his best friend is " + str(ali.get("friends")[0]))
