import express from "express";

import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';
 
 import e from "express";
 
 const app = express();

 app.use(express.json());

 app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
 });

 app.use('/book', bookRoutes);
 app.use('/student', studentRoutes);
 app.use('/user', userRoutes);

 try {
   const port = 3000;
   app.listen(port, () => {
     console.log(`listening to port ${port}...`);
   });
} catch (e) {
  console.log(e);
}