const express = require('express');

const UsersRoutes = express.Router();
const { registerUser, loginUser } = require('../controllers/users.controllers');

UsersRoutes.post('/register', registerUser);
UsersRoutes.post('/login', loginUser);

module.exports = UsersRoutes;
