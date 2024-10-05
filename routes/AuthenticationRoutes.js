const Router = require("express").Router();




const AuthenticationController = require("../controllers/AuthenticationController");



Router.post('/register/user',AuthenticationController.register);

Router.post('/login/user',AuthenticationController.login);



module.exports = Router