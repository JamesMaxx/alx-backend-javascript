# Promises in JavaScript

## Overview

Promises in JavaScript are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never.

## How, Why, and What

- **How:** Promises are created using the `new Promise()` constructor, which takes a function with `resolve` and `reject` parameters. Inside this function, asynchronous operations are performed, and `resolve` is called when the operation is successful, while `reject` is called when there is an error.
- **Why:** Promises are used to handle asynchronous code in a more organized and readable manner, avoiding callback hell and making code easier to maintain.
- **What:** Promises represent the eventual completion or failure of an asynchronous operation and allow chaining multiple asynchronous operations.

## Methods

- `then`: Used to handle the successful fulfillment of a promise. Takes two arguments: a callback for the success case and an optional callback for the failure case.
- `resolve`: Used to fulfill a promise with a given value.
- `catch`: Used to handle errors or rejections in promises.
- `every`: Used to check if all promises in an iterable resolve successfully.

## Error Handling

- `throw`/`try`: Used for synchronous error handling. `throw` is used to throw an error, and `try`/`catch` is used to catch and handle errors.
- `await`: Used with `async` functions to wait for a promise to resolve before proceeding with the code execution.

## Async Functions

- `async`: Keyword used to define an asynchronous function. Inside an async function, `await` can be used to pause execution until a promise is settled.

## Example

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      const data = { message: 'Data fetched successfully' };
      resolve(data);
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result.message);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAsync();
