import * as bookController from '../controllers/bookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks);

export default bookRoutes;