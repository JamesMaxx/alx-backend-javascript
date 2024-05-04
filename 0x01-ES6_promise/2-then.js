/**
 * Handle the response from the API
 * @param {Promise} promise - The promise from the API
 * @return {Promise} A new promise that resolves with the response object
 *                   or rejects with an error
 */
function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Got a response from the API
      console.log('Got a response from the API');
      // Return a success response
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      // Got a response from the API
      console.log('Got a response from the API');
      // Return an error
      return error;
    });
}
