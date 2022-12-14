import express from "express";
import cors from  'cors'

import alunosRouters from './routers/alunosRouters'
import "./database/index"
class App{
    constructor(){
        this.server = express()
        this.middleware()
        this.routes()
    }

    middleware(){
        this.server.use(express.json());
        this.server.use(cors())
    }

    routes(){
        this.server.use(alunosRouters)
    }
}

export default new App().server