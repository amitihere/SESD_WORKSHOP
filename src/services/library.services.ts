import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    constructor(private bookRepository: BookRepository) { }

    createBook(bookData: Omit<Book, 'id'>): Book {
        if (!bookData.title || !bookData.author || !bookData.isbn) {
            throw new Error("Title, author, and ISBN are required");
        }
        return this.bookRepository.create(bookData);
    }

    getAllBooks(): Book[] {
        return this.bookRepository.findAll();
    }
    getBookById(id: number): Book {
        const book = this.bookRepository.findById(id);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    }
    updateBook(id: number, bookData: Partial<Book>): Book {
        const book = this.bookRepository.findById(id);
        if (!book) {
            throw new Error("Book not found");
        }
        Object.assign(book, bookData);
        return book;
    }
    deleteBook(id: number): Book {
        const book = this.bookRepository.findById(id);
        if (!book) {
            throw new Error("Book not found");
        }
        this.bookRepository.delete(id);
        return book;
    }
}

