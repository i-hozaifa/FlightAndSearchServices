# welcome to flight service 
# project setup
clone the project on your local system
# install the required packages
execute 'npm install' on same path as of your root directory
# start the server
create 'env' file in the root directory with name 
"PORT = 3000"

# inside src/config create new file "config.json" and then add following peice of code

```
{
  "development": {
    "username": "<your db log in name>",
    "password": "<your db pwd>",
    "database": "<your db name>",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
}
```