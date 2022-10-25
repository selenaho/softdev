Go Jose!: Gordon Mo, Joshua Liu, Selena Ho  
SoftDev  
K17 -- Playing Around With SQLite Shell  
2022-10-24  
time spent: 0.4  
# how-to :: SQLite3
  
## To Create A Database
- start sqlite3 shell by typing `sqlite3`
- typing `sqlite3 <database_name>` creates a SQLite database with databasename BUT if a database with databasename already exists, then the shell will open the database

## To Create A Table:
- `create table tbl1(one text, two int);` creates a table named "tbl1" with two columns
- `text` and `int` don't restrict the values the user can put into the columns

## To Insert Values into the Table
- `insert into tbl1 values("hello", 2);`
- inserts hello into column one and 2 into column two
- can also do `insert into tbl1 values(2,"2");` without an error message despite declaring `text` for column one and `int` for column two

## Queries
- `select * from <Table_name>` returns everything from the table with | separating the columns and the rows appearing in new lines
- `select <Column_name> from <Table_name>` returns everything from the table in the column with columnname

## General Notes
- primary keys have to be unique - no repeating values (like an OSIS)
- control + z to exit
- Make sure to type semicolons at the end of each SQL command!
- `.tables` lists all the tables in the database
- If editing the same database in different terminals, making a change to the database in one terminal updates the database in both terminals

## Resources 
- [SQLite Documentation](https://sqlite.org/cli.html)

QCC:
- If the types of each column aren't limiting what's the purpose? 
- How do we get the types of each column to be limit the input values?
