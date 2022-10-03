'''
 TNPG: Harry and Lloyd
 Roster: Selena Ho, Aleksandra Shifrina
 SoftDev
 K06 -- Occupations Dictionaries, Splitting and Replacing, Given csv file, populate an empty dictionary with occupations as keys, and their percentages as values - write a function to choose a random occupation from this dictionary based on weighted percentage
 2022-09-30
 time spent: 1.5
 DISCO: dealing with uncomfortable formatting in csv files(we handled splitting by commas by temporarily using .replace()), built-in algorithm in the random module for choosing a random occupation by using weighted percentage  
 QCC: how can we use the csv module to handle formatting in files, rather than manually handling it ourselves? 
 OPS SUMMARY: we read the file in using .readlines()(automatically creating a list), removing the first and last rows right away. we populated the dictionary by first removing all instances of a new line. We replaced the commas in the occupations with a '|' temporarily in order to make splitting the occupation and percentage by comma easier. We then add the commas back into occupation, remove double quotation marks and convert the percentages to floats. finally we created the function to use the built-in random module algorithm and choose an occupation based on weighted percentage. 
'''
import random as rand

occupations_file = open('occupations.csv', 'r')
occupations = occupations_file.readlines()
occupations = occupations[1:len(occupations)-1] #ignores header of the file and the total percentage at the end of the file

occup_and_percent = {}
for i in range(len(occupations)):
    temp = occupations[i].replace("\n", "")
    temp = temp.replace(", ", "|") #to get rid of the issue with doing split with commas when some of the occupations have commas in them
    pair = temp.split(",")
    pair[0] = pair[0].replace("|", ", ") #to undo line 21 now that we've split occupation and percentage
    pair[0] = pair[0].replace('"', "") #some of the occupations have double quotes in them and others don't
    occup_and_percent[pair[0]] = float(pair[1]) #populates dictionary formatted like occupation:percentage


def rand_occup():
    return rand.choices(list(occup_and_percent.keys()), weights = list(occup_and_percent.values()))[0]

print(rand_occup())