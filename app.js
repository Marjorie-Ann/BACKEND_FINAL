import express from "express";

import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
 
 import e from "express";
 
 const app = express();
 
 app.use('/book', bookRoutes);
 app.use('/student', studentRoutes);
 
 try {
   const port = 3000;
   app.listen(port, () => {
     console.log(`listening to port ${port}...`);
   });
} catch (e) {
  console.log(e);
}