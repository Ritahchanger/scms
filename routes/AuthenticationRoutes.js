const Router = require("express").Router();




const AuthenticationController = require("../controllers/AuthenticationController");



Router.post('/register/user',AuthenticationController.register);



module.exports = Router