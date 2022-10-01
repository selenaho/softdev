import random as rand
#import csv

occupations_file = open('occupations.csv', 'r')
occupations = occupations_file.readlines()
occupations = occupations[1:len(occupations)-1] #ignores header of the file and the total percentage at the end of the file

occup_and_percent = {}
for i in range(len(occupations)):
    temp = occupations[i].replace("\n", "")
    temp = temp.replace(", ", "|") #to get rid of the issue with doing split with commas when some of the occupations have commas in them
    pair = temp.split(",")
    pair[0] = pair[0].replace("|", ", ")
    pair[0] = pair[0].replace('"', "") #some of the occupations have double quotes in them and others don't
    occup_and_percent[pair[0]] = float(pair[1]) #populates dictionary formatted like occupation:percentage


def rand_occup():
    return rand.choices(list(occup_and_percent.keys()), weights = list(occup_and_percent.values()))

print(rand_occup())