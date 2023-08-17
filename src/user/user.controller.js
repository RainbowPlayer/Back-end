const userModel = require('./user.model');
const jwt = require('jsonwebtoken');

class UserController {
  getOneUser = async (request, response) => {
    const { id } = request.params;
    const user = await userModel.find(id);

    response.send(user);
  }

  createUser = async (request, response) => {
    const { body } = request;
    const user = await userModel.create(body);

    response.send(user);
  }

  deleteUser = async (request, response) => {
    const { id } = request.params;
    await userModel.delete(id);

    response.send('Successfully deleted');
  }

  updateUser = async (request, response) => {
    const { id } = request.params;
    const { body } = request;
    const user = await userModel.update(id, body);

    response.send(user);
  }

}

module.exports = new UserController();