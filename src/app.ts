import express from "express";
interface App_interface{
    startServer():void;
    initializeRoutes():void;
}
export default class App implements App_interface{

    port:number;
    app:express.Application;

    constructor(){
        this.port = 4000;
        this.app = express()
        this.startServer();
        this.initializeRoutes();
    }
    startServer():void{
        this.app.listen(this.port,()=>{
            console.log(`server is running on port ${this.port}`)
        })
    }
    
    initializeRoutes():void{
        this.app.use(express.json())

    }

}