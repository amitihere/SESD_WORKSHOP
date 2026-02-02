import express from "express";
import { BookRepository } from "./repositories/book.repository";
import { BookService } from "./services/library.services";
import { BookController } from "./controllers/library.controller";
import { BookRoutes } from "./routes/library.routes";
import { ErrorMiddleware } from "./middleware/library.middle";

export default class App {
    public app: express.Application;
    public port: number = 4000;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
    }

    private initializeRoutes(): void {
        const bookRepository = new BookRepository();
        const bookService = new BookService(bookRepository);
        const bookController = new BookController(bookService);
        const bookRoutes = new BookRoutes(bookController);

        this.app.get('/', (req, res) => {
            res.json({ message: 'Welcome to Library Book CRUD API' });
        });

        this.app.use('/api/books', bookRoutes.router);
    }

    private initializeErrorHandling(): void {
        this.app.use(ErrorMiddleware);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`App started on http://localhost:${this.port}`);
        });
    }
}