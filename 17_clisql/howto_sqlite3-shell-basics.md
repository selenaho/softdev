Go Jose!: Gordon Mo, Joshua Liu, Selena Ho
SoftDev
K17 -- Playing Around With SQLite Shell
2022-10-24
time spent: 0.4
###SQLite3 How To

- start sqlite3 shell by typing `sqlite3`
- typing `sqlite3 ex1` creates a SQLite database named "ex1"

##To Create A Table:
- `create table tbl1(one text, two int);` creates a table named "tbl1" with two columns
- `text` and `int` don't restrict the values the user can put into the columns

##To Insert Values into the Table
- `insert into tbl1 values("hello", 2);`
- inserts hello into column one and 2 into column two
- can also do `insert into tbl1 values(2,"2");` without an error message despite declaring `text` for column one and `int` for column two

##Queries
- `select * from <tablename>` returns everything from the table with | separating the columns and the rows appearing in new lines

Make sure to type semicolons at the end of each SQL command!

##General Notes
- primary keys have to be unique - no repeating values (sort of like an OSIS)
- control + z to exit

QCC:
- If the types of each column aren't limiting what's the purpose? 
- How do we get the types of each column to be limit the input values?
