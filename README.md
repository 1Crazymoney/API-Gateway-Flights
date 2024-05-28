This is a base Node JS template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside , this will not include any kind of tests.(You might want to make a separate tests folder)

Let's take a look inside the 'src' folder
- `config` -> In this folder, anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up 'dotenv' so that we can use the environment variables anywhere in a cleaner fashion, this is done in the 'server-config.js' file. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

- `Routes` -> In the routes folder, we register a route and the corresponding middewares and controllers to it.

- `Middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `Controllers` -> They are kind of last middlewares as post them you call your business layer to execute the business logic. In controllers, we just receive the incoming rquests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `Repositories` -> This folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `Services` ->  This folder contains the business logic and interact with repositories for the data from the database.

- `Utils` -> It contains helper methods, error classes etc.

### Setup the project
- Download this template from github and open it in your text editor.
- Go inside the folder path and execute the following command:
```
npm install

```
- In the root directory, create `.env` file and add the following environment variables
```
  PORT=<port number of your choice>
```
- Inside the `src/config` folder create a file named as `config.json` and write the following code:
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Go inside the `src` folder and execute the following command:
```
 npx sequelize init

```
- By executing the above command, you will get migrations and seeders folder along with a config.json inside the config folder.
- If you are setting up your development environment,then write the username of your db,password of your db and in dailect mention whatever db you are using for ex: mysql, mariadb etc.
- If you are setting up test or prod environment, make sure you also replace the host with the hosted db url.

- To run the server execute
```
npm run dev

```
