#Clyde "Thluffy" Sinclair
#SoftDev  
#skeleton/stub :: SQLITE3 BASICS
#Oct 2022

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"


db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >
c.executescript("""create table students(name text, age int, id int primary key);
create table courses(code text, mark int, id int);
""")

with open ('students.csv', newline='') as csvfile: #people often forget to include the close line so with open prevents that from happening
    students = csv.DictReader(csvfile)
    #example row in students: {'name': 'alison', 'age': '23', 'id': '10'}
    for entry in students:
        name = entry['name']
        age = entry['age']
        Student_id = entry['id']
        c.execute('"insert into students values("' + name + ',' + age + ',' Student_id + '"' ')

    

#print(students)


command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database


