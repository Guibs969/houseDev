const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@cluster0.nkrov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
            {
        
     })


        this.middlewares();
        this.routes();
    }

middlewares(){
    this.server.use(express.json())

    }


 routes(){
    this.server.use(routes)

        }


}

module.exports = new App().server