const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', function(req, res, next) {
  res.send('users');
});

router.get('/:id', controller.getOneUser);

router.post('/', controller.createUser);

router.delete('/:id', controller.deleteUser);

router.patch('/:id', controller.updateUser);

router.post('/authenticate', controller.authenticateUser);

module.exports = router;