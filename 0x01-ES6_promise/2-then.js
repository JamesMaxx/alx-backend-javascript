#!/usr/bin/node

/**
 * Appends handlers to the handleResponseFromAPI function.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} A Promise that resolves to an object or rejects with an Error.
 */
function handleResponseFromAPI(promise) {
  // Append a handler for when the Promise resolves
  const resolveHandler = promise.then(() => {
    console.log('Got a response from the API'); // Log message on resolution
    return { status: 200, body: 'success' }; // Return object on resolution
  });

  // Append a handler for when the Promise rejects
  const rejectHandler = promise.catch(() => new Error()); // Return empty Error object on rejection

  // Return a Promise that resolves to an object or rejects with an Error
  return Promise.race([resolveHandler, rejectHandler]);
}

// Export the function to make it accessible from other modules
module.exports = handleResponseFromAPI;
