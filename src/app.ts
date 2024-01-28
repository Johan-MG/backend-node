import express, { Application } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import purchases from './routes/purchases.routes'

export class App{
    private app: Application;

    constructor(private port?: number | string){
        dotenv.config()
        this.app = express()
        this.settings()
        this.middelwares()
        this.request()
        this.routes()
        this.hedears()
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT)
    }
    middelwares(){
        this.app.use(morgan('dev'))
    }
    async listen(){
        await this.app.listen(this.app.get('port'))
        console.log('Server on port', this.app.get('port'))
    }
    request(){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }
    routes(){
        this.app.use('/api/v1/purchases',purchases)
    }
    hedears(){
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');  // Permitir todas las solicitudes, ajusta esto según tus necesidades de seguridad
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
          });
    }
}