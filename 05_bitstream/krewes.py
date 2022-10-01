# Selena Ho, Aleksandra Shifrina
# SoftDev
# K05 -- Krewes/Dictionaries, Tuples, Split, Random/Given csv file - take this info and put it into a dictionary and then randomly choose and print a devo's information.
# 2022-09-29
# time spent: 1.0

# DISCO: .append is used with dictionaries to update the values for the keys in dictionaries. open(<file_name>, <method>)
# QCC: How to read text files? (answer on Piazza already) How should we check if our code including reading the text file works?
# OPS SUMMARY: We first used split to split up each tuple by \n into a list of strings called info. Then, we used a for loop to loop through each tuple and separate the email, period and ducky name. This allows us to populate the dictionary dev_duckies with periods as the keys and the corresponding email and ducky in the value. After populating the dictionary, we used rand.choice to randomly select a period and then a developer in that period and print out their corresponding information.
import random as rand
#krewes = "2$$$A$$$B@@@7$$$C$$$D@@@8$$$E$$$F@@@2$$$G$$$H"

krewes_file = open('krewes.csv', 'r')
krewes = krewes_file.read()

def dev_duck(string_krew):
    dev_duckies = {} #will be a dictionary formatted like period : "email|ducky"
    info = string_krew.split('\n') #creates a list of strings of 'email,period,ducky'
    for i in range(len(info)):
        devo = tuple(info[i].split(",")) # splits each element of the info list into a tuple of email, period, ducky
        if (int(devo[1]) not in dev_duckies): #if there isn't already a key with the same period as devo[0] then new key = int(devo[1]) added to dictionary
            temp = devo[0] + '|' + devo[2]
            dev_duckies[int(devo[1])] = [temp]
        else: #period is already a key in the dev_duckies dictionary
            temp = dev_duckies[int(devo[1])] 
            temp.append(devo[0] + '|' + devo[2]) #appends email and ducky value to the key with period int(devo[1])
    periods = list(dev_duckies)  #list of the keys of dictionary
    period = rand.choice(periods)
    devo = rand.choice(dev_duckies[period]) #devo is in format "email|ducky"
    
    print("The selected devo is in period " + str(period) + ". Their email is " + devo.split("|")[0] + " and their ducky's name is " + devo.split("|")[1] + ".")

dev_duck(krewes)