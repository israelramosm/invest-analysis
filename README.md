# Express-React Template
An express react template with tests to learn more about Javascript.

## Run

To run the application first install all the dependencies

```sh
$ yarn install
```

* Start the db, I recommend to check the mongo configuration

```sh
$ yarn run db
```

* For development mode

Backend

```sh
$ yarn run build:backend
$ yarn run start:backend
```

Frontend

```sh
$ yarn run start
```

* or for production mode

```sh
$ yarn run build:project
```

To run the test or coverage, the test can be run without mongo installed on the machine

```sh
$ yarn run tests
```

## Configuration

### Mongo
Quick configuration to use mongod with authentication

```shell
$ mongod --dbpath "C:\dbpath"
```

In another console

```shell

$ mongod
> use admin
> db.createUser({user: 'username', pwd:'password', roles:[{role:'userAdminAnyDatabase',db: 'admin'}]})
> use <dbname>
> db.createUser({user: 'username', pwd:'password', roles:[{role:'readWrite',db: '<dbname>'}]})
```

Then we can restart the process of mongod using auth

```shell
$ mongod --auth --dbpath "C:\dbpath"
```

### esLint and Prettier using airbnb standards

From [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

1. Download the ESLint and Prettier extensions for VSCode.
2. Install the ESLint and Prettier libraries into our project. In your project’s root directory, you will want to run: npm install -D eslint prettier
3. Install the Airbnb config. If you’re using npm 5+, you can run this shortcut to install the config and all of its dependencies: npx install-peerdeps --dev eslint-config-airbnb
4. Install eslint-config-prettier (disables formatting for ESLint) and eslint-plugin-prettier (allows ESLint to show formatting errors as we type) npm install -D eslint-config-prettier eslint-plugin-prettier
5. Create .eslintrc.json file in your project’s root directory:

```json
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  },
}
```
6. Create .prettierrc file in your project’s root directory. This will be where you configure your formatting settings. I have added a few of my own preferences below, but I urge you to read more about the Prettier config file
```json
{
  "printWidth": 100,
  "singleQuote": true
}
```
7. The last step is to make sure Prettier formats on save. Insert "editor.formatOnSave": true into your User Settings in VSCode.

## References
[Creating a Node Express-Webpack App with Dev and Prod Builds](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)

[To Handle Authentication With Node JS, Express, Mongo, JWT](https://codeburst.io/to-handle-authentication-with-node-js-express-mongo-jwt-7e55f5818181)
