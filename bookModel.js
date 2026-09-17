import pool from '../config/db.js';


export const fetchAllBooks = async () => {
  const [rows] = await pool.query('SELECT * FROM books');
  return rows;
};