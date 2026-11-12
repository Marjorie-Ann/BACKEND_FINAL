import * as userController from '../controllers/userController.js';
import express from "express";

const userRoutes = express.Router();

userRoutes.post('/new', userController.createAccount);
userRoutes.post('/login', userController.login);


export default userRoutes;