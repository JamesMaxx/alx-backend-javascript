# Promises in JavaScript

## What are Promises?

A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. Promises provide a better way to handle asynchronous operations in JavaScript compared to callbacks and events.

Some key characteristics of promises:

- Promises are eager. The promise constructor function executes immediately when called.
- Promises can be in one of 3 states - pending, fulfilled or rejected.
- The `then()`, `catch()` and `finally()` methods are used to handle the different states of the promise.

## Why Promises?

Promises help write asynchronous code that reads similarly to synchronous code. It avoids callback hell and provides a standard approach for handling asynchronous operations.

Some benefits of using promises:

- Improved error handling using `catch()`
- Chaining promises with `then()`
- Ability to execute asynchronous operations in sequence
- Better handling of asynchronous dependencies

## Using Promises

Here is a simple example to demonstrate promises:

const promise = new Promise((resolve, reject) => {
// async operation
if(success) {
resolve(value);
} else {  
 reject('failure reason');
}
});

promise.then((result) => {
// handle fulfillment
}).catch((error) => {
// handle rejection
});

The promise constructor takes a callback function which contains the async operation. The callback has two arguments - `resolve` and `reject`.

- `resolve(value)` is called when the async operation succeeds. It resolves the promise and the promise state changes from pending to fulfilled.

- `reject(reason)` is called when the async operation fails. It rejects the promise and the promise state changes from pending to rejected.

The `then()` method is used to handle fulfillment and `catch()` is used to handle rejection.

## Promise Methods

### then()

Attaches callbacks for when the promise is settled (fulfilled or rejected). Returns a new promise resolving to the return value of the callback.

### catch()

Attaches a callback for when the promise is rejected. Returns a new promise resolving to the return value of the callback.

### finally()

Attaches a callback to be executed when the promise is settled, whether fulfilled or rejected. Does not return a new promise.

### Promise.all()

Returns a promise that resolves when all promises in the iterable argument have resolved.

### Promise.race()

Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

### Promise.resolve()

Returns a promise that resolves with the passed argument.

### Promise.reject()

Returns a promise that rejects with the passed argument.

## Async/Await

Async/await builds on top of promises and makes asynchronous code look more like synchronous code.

The `async` keyword is used to declare an async function that returns a promise. Inside an async function we can use the `await` keyword to pause execution until a promise is settled, then resume after the promise is fulfilled with the fulfilled value.

async function getUser() {

const response = await fetch('/api/user');
const user = await response.json();

return user;

}

## Error Handling

It's important to handle errors correctly when working with promises. Use `try/catch` within async functions:

async function getUser() {
try {
// async operation
} catch (error) {
// handle error
}
}

Or chain `.catch()` to promises:

function getUser() {
return fetch('/api/user')
.then(response => response.json())
.catch(error => {
// handle error
});
}

This covers the basics of working with promises in JavaScript! Let me know if you have any other questions.
