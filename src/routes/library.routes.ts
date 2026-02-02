import { Router } from "express";
import { BookController } from "../controllers/library.controller";

export class BookRoutes {
    public router: Router;

    constructor(private bookController: BookController) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/', this.bookController.createBook);
        this.router.get('/', this.bookController.getAllBooks);
    }
}
