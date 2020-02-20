import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse-t9lmy.gcp.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());

        this.server.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, HEAD");
            next();
        });
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;