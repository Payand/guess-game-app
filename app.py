import random

"""
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

    print(age)


age_calc()

age = []
for year in years:

    hello = age_years(year)
    age.append(hello)
print(age)


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


class John:
    def __init__(self, firstname, lastname, height, mass):
        self.firstname = firstname
        self.lastname = lastname
        self.height = height
        self.mass = mass

    def bmi_calc(self):
        self.bmi = self.mass / self. height ** 2
        return self.bmi


class Mark:
    def __init__(self, firstname, lastname, height, mass):
        self.firstname = firstname
        self.lastname = lastname
        self.height = height
        self.mass = mass

    def bmi_calc(self):
        self.bmi = self.mass / self. height ** 2
        return self.bmi


def summery():
    if john_body.bmi_calc() > mark_body.bmi_calc():
        return "John BMI " + str(john_body.bmi_calc()) + " is higher than Mark"
    else:
        return "Mark BMI " + str(mark_body.bmi_calc()) + " is higher than  John"

mark_body = Mark("Mark", "Miller", 1.69, 78)
john_body = John("John", "Smith", 1.95, 150)
print(summery())


joey = [
    'joey',
    'tribbiani',
    33,
    'actor',
    ['Ross', 'Chandler']
]
list = []
for j in joey:
    print(j)
    list.append(type(j))
print(list)


list2 = [2, 3, 5]


for i in list2:
    i = i + i
print(i)
"""
# this is a bill and tip calculations

class Bills:
    def __init__(self, money):
        self.money = money
        

        
    def list_maker(self):
        return self.money
        
    
    def list_tips(self):
       if self.money > 100:
           return self.money * 0.2
           
            
                 
    
    
def input_number():
    count = 0
    customer = int(input("How many customers do you have : "))
    people_bills_list = [ ]
    people_tips_list = []
    people_total_list = []
    while count != customer:
        people_bills= Bills(int(input("enter customer's bill : ")))
        count += 1
        people_bills_list.append(people_bills.list_maker())
        people_tips_list.append(people_bills.list_tips())
        people_total_list.append(people_bills.list_maker() + people_bills.list_tips())
    print()    
    print("list of Bills " + str(people_bills_list))
    print("List of tips" + people_tips_list)
    print("List of totals" +people_total_list)

input_number()    
            
        
        



    

        
        
        
        

            
       
                    
        

    
    
 


    











       
       
"""  
x = 0
bills = []
tipping_jar=[]
while  x != 4 :
    
        
    input_bills = int(input("please enter your number :"))
    x +=1
        
    bills.append(input_bills)   
    


for bill in bills:
    if bill <= 300:
        people_bill=bill * 0.15
        tipping_jar.append(people_bill)
    else:
        people_bill1 = bill * 0.2
        tipping_jar.append(people_bill1)
    
print(tipping_jar)    
    
"""        
                    






