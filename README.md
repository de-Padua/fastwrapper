
# fetchttp


The main objective of this project is eliminate all of the boilerplate that comes with the fetch api.

A HTTP wrapper build to provide a much easy dev experience for those who use the standart fetch API. is designed to simplify and streamline the process of making HTTP requests in JavaScript. It provides a fluent interface for configuring and executing HTTP requests with various methods such as GET, POST, PATCH, UPDATE, and DELETE.

The class abstracts away the complexities of constructing requests and handling responses, providing a cleaner and more readable syntax for making HTTP requests in your applications.

## Class Properties:

- `#method`: Private field to store the HTTP method (e.g., "get", "post", "patch", etc.).
- `#body`: Private field to store the request body for methods like POST, PATCH, etc.
- `#headers`: Private field to store default headers with the Content-Type set to "application/json".
- `#requestOption`: Private field to store default request options, such as mode, cache, credentials, etc.
- `#fullreq`: Private field to store the complete request object.

## Constructor:

Takes a URL as a parameter and initializes the `url` property.

## HTTP Methods:

- `get()`, `post()`, `patch()`, `update()`, `delete()`: Set the HTTP method and return the instance to enable method chaining.

## Configuration Methods:

- `headers(custom)`: Set custom headers for the request.
- `body(custom)`: Set the request body by converting the provided object to a JSON string.
- `options(custom)`: Set custom request options by merging with the default options.

## Request Building:

- `buildRequest()`: Constructs the complete request object based on the chosen HTTP method, headers, body, and options.

## Request Execution:

- `call()`: Alias for `buildRequest()`; returns the result of the request execution.

## Request Execution and Response Handling:

- `resquest()`: Uses the `fetch` API to execute the request and parse the JSON response.

## Usage

```javascript 
const wrapper = new Wrapper("fastwrapper");

const responseData = await wrapper
  .get()
  .headers({ Authorization: 'Bearer TOKEN' })
  .call();

console.log(responseData);
``` 


### Make a post request 


```javascript
const postData = { key: 'value' };

const responseData = await wrapper
  .post()
  .headers({ Authorization: 'Bearer TOKEN' })
  .body(postData)
  .call();

console.log(responseData);
```


### Additional Configuration

Customize headers, request body, and options using available methods:


```javascript
const responseData = await wrapper
  .get()
  .headers({ Authorization: 'Bearer TOKEN', 'Custom-Header': 'Value' })
  .options({ credentials: 'include' })
  .call();

console.log(responseData);
```



## Instalation

Instale my-project com npm

```bash
  npm i fastwrapper
```
  
Usage

```javascript
const fetchttp = require("fastwrapper");

```
