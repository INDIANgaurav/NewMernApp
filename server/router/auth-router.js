const express = require('express');
const { home, register, login } = require('../controllers/auth-controller');
const signupSchema = require('../validators/auth-validators')
const validate = require('../middlewares/validate-middleware');
const loginSchema = require('../validators/login-validator');
const router = express.Router();
 const authMiddleware = require('../middlewares/auth-middleware');
const authControllers = require('../controllers/auth-controller');
 
router.route('/').get(home) ;
 
router.route('/register').post( validate(signupSchema) ,  register )
router.route('/login').post( validate(loginSchema) , login )
router.route('/user').get(authMiddleware , authControllers.user  )

 module.exports = router ;