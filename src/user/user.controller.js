const userModel = require('./user.model');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "welcome_to_night_city";

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

  authenticateUser = async (request, response) => {
    const { login, password } = request.body;

    if (login === "admin" && password === "admin") {
      const payload = { login: "admin" };
      const staticToken = jwt.sign(payload, SECRET_KEY);

      response.send({ token: staticToken });
    } else {
      response.status(401).send({ message: "failed" });
    }
  }
}

module.exports = new UserController();