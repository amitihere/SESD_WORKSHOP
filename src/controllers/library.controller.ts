import { Request, Response } from "express";
import { BookService } from "../services/library.services";

export class BookController {
    constructor(private bookService: BookService) { }

    createBook = (req: Request, res: Response): void => {
        try {
            const book = this.bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    };

    getAllBooks = (req: Request, res: Response): void => {
        try {
            const books = this.bookService.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };
    getBookById = (req: Request, res: Response): void => {
        try {
            const book = this.bookService.getBookById(Number(req.params.id));
            res.status(200).json(book);
        } catch (error) {
            res.status(404).json({ error: (error as Error).message });
        }
    };
    updateBook = (req: Request, res: Response): void => {
        try {
            const book = this.bookService.updateBook(Number(req.params.id), req.body);
            res.status(200).json(book);
        } catch (error) {
            res.status(404).json({ error: (error as Error).message });
        }
    };
}
