import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  const books = await bookModel.fetchAllBooks();
  return books;
}