[![Build Status](https://travis-ci.com/annaboyatyuk/11-express.svg?branch=master)](https://travis-ci.com/annaboyatyuk/11-express)


![cf](https://i.imgur.com/7v5ASc8.png) 11: Express and Babel
======


### Links
* PR https://github.com/annaboyatyuk/11-express/pull/2
* Travis https://travis-ci.com/annaboyatyuk/11-express/builds
* Heroku https://lab11express401.herokuapp.com/ 


#### Configure
* test `GET` `POST` and `DELETE` using postman

#### Server Endpoints
* **`/api/vi/resource-name`**
* `POST` request
 * pass data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * pass `/:id` as a route parameter to **GET** a specific resource (as JSON)
* `DELETE` request
 * pass `/:id` as a route parameter to **DELETE** a specific resource (as JSON)
 * this should return a 204 status code with no content in the body

#### Tests
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure the `/api/simple-resource-name` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body

