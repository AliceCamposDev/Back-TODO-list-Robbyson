import express from "express"
import mongoose, { mongo } from "mongoose"
import routes from "./routes"
import cors from "cors"

class App {
    constructor() {
        this.server = express()
        this.database()
        this.cors()
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json())
        this.server.use(routes)


    }
    database() {
        //ê mania de n colocar um .env hein  
        mongoose.connect('')
        console.log("conectado no mongao")
    }
    cors() {
        const corsOptions = {
            origin: '*',
            credentials: true
        }
        this.server.use(cors(corsOptions))
    }
}
export default new App().server