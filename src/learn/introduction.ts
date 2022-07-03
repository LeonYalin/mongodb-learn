import { log, delimeterMsg, logF } from '../util';

function installations() {
  log(
    `In order to install everything, just run the Docker compose: "docker compose up".
    This will install and run the node app, mysql and workbench containers.

    If we want to tetst the mysql cli, we should hook into container and start the cli.
    - run "docker exec -it <container-name> sh". Look for container name via "docker ps -a".
    - run "mysql -u root -p command inside container. When prompted, enter the "root" password.
    - type "show database" to test that mysql is working properly.
    - If prompted to reset password, type "ALTER USER 'root'@'localhost' IDENTIFIED BY '<new-password>';"
    `,
  );
}

function databases() {
  log(
    `Let"s try some basic databases commands.
    - To create a database, use "CREATE DATABASE <db_name>;"
    - To use a database as current, use "USE <db_name>;"
    - To show a database as current, use "SELECT DATABASE();"
    - To delete a database, use "DROP DATABASE <db_name>;"
  `,
  );
}

function variables() {
  log(
    `In MySQL, there are a lot of variable types. Let's see the most used ones: 
    - INT: a whole numbers, between -2,147,483,647 to 2,147,483,647 (-2^16 to 2^16)
    - VARCHAR: strings, between 1-255 characters
  `,
  );
}

function tables() {
  log(
    `Let's try to create a table:
    - CREATE TABLE persons (
        name VARCHAR(30),
        age INT
      )
    - to view existing tables, use "SHOW TABLES;"
    - to show warnings, type "SHOW WARNINGS". Example of a warninig: your string has been truncated because it exceeds max lenght.
    - to view table data, use "DESC <table_name>" or "SHOW COLUMNS FROM <table_name>";"
    - to delete a table, use "DROP TABLE <table_name>"
    - to insert a row, type "INSERT INTO <table_name> (col1, col32) VALUES (val1, val2)"
    - to insert multiple rows, type "INSERT INTO <table_name> (col1, col32) VALUES (val1, val2), (val3, val4), (val5, val6)"
    - to view table data, type "SELECT * FROM <table_name>"
    - to specify that table fiels are required, use "CREATE TABLE <table_name>(<column_name> VARCHAR(30) NOT NULL)"
    - to specify default values, use "CREATE TABLE <table_name>(<column_name> VARCHAR(30) DEFAULT 'lalala', age INT)"
    - to specify primary key, use "CREATE TABLE <table_name>(id INT NOT NULL AUTO_INCREMENT, age INT, PRIMARY KEY(id))"
  `,
  );
}

export default function introduction() {
  delimeterMsg('INTRODUCTION');
  logF(installations);
  logF(databases);
  logF(variables);
  logF(tables);
}
