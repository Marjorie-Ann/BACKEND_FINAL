import pool from '../config/db.js';

export const fetchAllStudents = async () => {
  const [rows] = await pool.query("SELECT * FROM students");
  return rows;
};