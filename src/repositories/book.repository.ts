import { Book } from "../models/book.model";

export class BookRepository {
    private books: Book[] = [];
    private currentId: number = 1;

    create(book: Omit<Book, 'id'>): Book {
        const newBook: Book = {
            id: this.currentId++,
            ...book
        };
        this.books.push(newBook);
        return newBook;
    }

    findAll(): Book[] {
        return this.books;
    }
    findById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }
    update(id: number, bookData: Partial<Book>): Book {
        const book = this.books.find(book => book.id === id);
        if (!book) {
            throw new Error("Book not found");
        }
        Object.assign(book, bookData);
        return book;
    }
}

