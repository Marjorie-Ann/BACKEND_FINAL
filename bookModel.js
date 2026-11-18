import pool from '../config/db.js';

export const fetchAllBooks = async () => {
  const [rows] = await pool.query('SELECT * FROM book');
  return rows;
};

export const findBookByNameAndAuthor = async (book) => {
    const [rows] = await pool.query("SELECT * FROM book WHERE name = ? AND author = ?", 
        [book.name, book.author]
    );
    return rows;
}

export const findBookById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM book WHERE id = ?",
      [id]
    );
    return rows;
}

export const deleteBookById = async (id) => {
  const [rows] = await pool.query("DELETE FROM book WHERE id = ?",
    [id]
  );
  return rows;
} 

//insert
export const insert = async (book) => {
  const [result] = await pool.query(
    "INSERT INTO book (name, author) VALUES (?, ?)", 
    [book.name, book.author]
  );

  return result.insertId;
}

export const update = async (book) => {
  const [result] = await pool.query (
    "UPDATE book SET name= ?, author= ? WHERE id= ?",
    [book.name, book.author, book.id]
  );
  return result.affectedRows;
}

export const remove = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM book WHERE id= ?", [id]
  );
  return result.affectedRows;
}