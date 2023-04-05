const express = require("express");
const router = express.Router();
const { userData, CreateUser, getUserByName } = require("../Controller/userController");

router.get('/user', userData)

router.post('/user', CreateUser)

router.get('/user/:name', getUserByName)

module.exports = router;
