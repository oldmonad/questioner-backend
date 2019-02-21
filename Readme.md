# Questioner


[![Build Status](https://travis-ci.org/dbytecoderc/Questioner.svg?branch=develop)](https://travis-ci.org/dbytecoderc/Questioner) [![Coverage Status](https://coveralls.io/repos/github/dbytecoderc/Questioner/badge.svg?branch=develop)](https://coveralls.io/github/dbytecoderc/Questioner?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/97d87d1d2d257c503169/maintainability)](https://codeclimate.com/github/dbytecoderc/Questioner/maintainability)


Questioner is a meetup service used to organize online groups that schedule in-person meetup events for people with similar interests. You can also ask questions relating to a particular meetup. 

- UI template: [https://dbytecoderc.github.io/Questioner/UI/](https://dbytecoderc.github.io/Questioner/UI/)
- API Documentation: [https://enigmatic-refuge-95413.herokuapp.com/api-docs](https://enigmatic-refuge-95413.herokuapp.com/api-docs)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Here are the environment prerequisites for the web app

```
- NodeJS
- Postgress
```

### Installing


- Start your postgress server
- Create a postgress database with any name but make sure to use the same name in the .env file for the PG_DATABASE variable
- Clone the repository
- Copy .env.example to .env then correct change the corresponding variables
- Run `npm install` to install node packages
- Run `npm run start:dev` to start the web app 
- Run `npm run test` to run the tests


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

### Endpoints

Using Postman to access these endpoints

| Endpoint                                                | Methods  | Functionalities                       |
| ------------------------------------------------------- | -------- | ------------------------------------- |
| /api/v1/auth/login                                      | POST     | Login registered user                 |
| /api/v1/auth/signup                                     | POST     | Register a new User                   |
| /api/v1/meetups                                           | POST      | Create a meetup                     |
| /api/v1/meetups                                           | GET      | Get all meetup records                    |
| /api/v1/meetups/upcoming                                           | GET      | Get all upcoming meetup records        |
| /api/v1/meetups/`<id>`                                | GET | Get a meetup record              |
| /api/v1/meetups/`<id>`/questions                                | GET | Get all questions for a particular meetup             |
| /api/v1/meetups/`<id>` | DELETE      | Delete a meetup record                    |
| /api/v1/questions                        | POST      | Ask a question           |
| /api/v1/questions/`<id>`                       | GET      | Get a particular question |
| /api/v1/questions/`<id>`/upvote                                         | PATCH      | Upvote a question                     |
| /api/v1/questions/`<id>`/downvote                                         | PATCH      | Downvote a question                  |
| /api/v1/questions/`<id>`/comments                                         | GET      | Get all the comments under a question  |
| /api/v1/comments                                         | GET      | Get all the comments under a question                   |

Explain what these tests test and why

```
Give an example
```

## Deployment

For deployment, the .env file or the running environment should have the following variable

DATABASE_URL='database url'
DATABASE_URL_TEST='test database'
NODE_ENV='test'
SECRET='jwt secret'
ADMIN_PASSWORD='Admin password'
API_BASE='/api/v1/'
PORT='8000'


DB_IP='127.0.0.1'

## Built With

- HTML
- Javascript
- CSS
- NodeJS / Express
- Postgress


Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Author

- **Oparah DC**
