import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  const books = await bookModel.fetchAllBooks();
  return books;
}

export const createBook = async (book) => {
  const bookId = await bookModel.insert(book);
  return bookId;
}

export const updateBook = async (book) => {
  const updatedBook = await bookModel.update(book);
  return updatedBook;
}