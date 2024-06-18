/**
 * Contains the miscellaneous route handlers.
 * @author JamesMaxx <https://github.com/JamesMaxx>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;