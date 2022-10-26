#Go Jose!: Gordon Mo, Joshua Liu, Selena Ho
#SoftDev  
#K18 // creating database and tables, populating tables using python
#2022-10-26
#time spent: 1.5

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"


db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================

c.executescript("""create table students(name text, age int, id int primary key);
create table courses(code text, mark int, id int);
""")

with open ('students.csv', newline='') as csvfile: #people often forget to include the close line so with open prevents that from happening
    studentsDR = csv.DictReader(csvfile)
    #example row in studentsDR: {'name': 'alison', 'age': '23', 'id': '10'}
    for entry in studentsDR:
        name = entry['name']
        age = entry['age']
        Student_id = entry['id']
        Execute_string = f'insert into students values("{name}", {age}, {Student_id})' #uses formatted strings, populates students table
        c.execute(Execute_string)

with open ('courses.csv', newline='') as csvfile:
    coursesDR = csv.DictReader(csvfile)
    for entry in coursesDR:
        code = entry['code']
        mark = entry['mark']
        Student_id = entry['id']
        Execute_string = f'insert into courses values("{code}", {mark}, {Student_id})' #uses formatted strings, populates students table
        c.execute(Execute_string)

command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database


