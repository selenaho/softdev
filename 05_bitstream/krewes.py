# Selena Ho, Aleksandra Shifrina
# SoftDev
# K05 -- More work with dictionaries and split
# 2022-09-29
# time spent: 1.0

# DISCO: 
# QCC:
# OPS SUMMARY: We first used split to split up each tuple into a variable called info. Then, we used a for loop to loop through each tuple and separate each element.
import random as rand
krewes = "2$$$A$$$B@@@7$$$C$$$D@@@8$$$E$$$F@@@2$$$G$$$H"

# krewes_file = open(“krewes.txt”, “r”)
# krewes = krewes_files.read()

def dev_duck(string_krew):
    dev_duckies = {}
    info = string_krew.split("@@@") #period, name, and ducky including the $$$, creates a list of strings
    for i in range(len(info)):
        devo = tuple(info[i].split("$$$")) # splits each element of info into a tuple of period, name, ducky
        if (int(devo[0]) not in dev_duckies):
            temp = devo[1] + '|' + devo[2]
            dev_duckies[int(devo[0])] = [temp]
        else:
            temp = dev_duckies[int(devo[0])]
            temp.append(devo[1] + '|' + devo[2])
            
    periods = list(dev_duckies)
    period = rand.choice(periods)
    devo = rand.choice(dev_duckies[period])
    
    print("The selected devo is in period " + str(period) + ". Their name is " + devo.split("|")[0] + " and their ducky's name is " + devo.split("|")[1] + ".")

dev_duck(krewes)