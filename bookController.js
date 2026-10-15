import * as bookService from '../services/bookService.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}

export const createBook = async (req, res) => {
    const { name, author } = req.body;
    const book = { name, author };

    try {
        const bookId = await bookService.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
           error: "Internal Server Error"
        });
    }
} 

export const editBook = async (req, res) => {
    const {name, author} = req.body;
    const {id} = req.params;
    const book = {id: parseInt(id), name, author};

    try {
        const updatedBook = await bookService.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
           error: "Internal Server Error"
        });
    }   
}