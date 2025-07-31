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
  once you added above db config , go to the src folder and execute `npx sequelize db:create`
}
```
# DB desighn 
 - Airplane Service :
   -id
   -model_number
   -capacity
   -created-at
   -updated_at
 
 - Flight:
   -id
   -departure_city_id
   -destination_city_id
   -airplane_id
   -departure
   -arrival
   -Flight_number
   -Airport_id
   

 - Airport:
   -id
   -name
   -city_id
   -adress
 
 - city:
   -id
   -name

   -a flight belongs to airplane but one airplane can be used in multiple flight
   -a city has many airports but one airport belongs to a city
   - one  airport  can have multiple flights but flight belongs to one airport