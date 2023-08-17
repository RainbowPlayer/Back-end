class UserModel {
  find = (id) => {
    return new Promise((resolve) =>
      resolve({ id, login: "admin", password: "admin" })
    );
  };

  create = (body) => {
    return new Promise((resolve) =>
      resolve({ id: +new Date(), ...body })
    );
  }

  delete = (id) => {
    return new Promise((resolve) =>
      resolve({ code: 'ok' })
    );
  }

  update = (id, body) => {
    return new Promise((resolve) =>
      resolve({ id, ...body })
    );
  }
}

module.exports = new UserModel();
