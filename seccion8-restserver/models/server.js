const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';
        // middlewares
        this.middlewares();
        // rutas
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        // lectura y parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.pathUsers, require('../routes/user.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;