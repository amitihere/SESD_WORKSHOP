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
}

