const mongoose = require('mongoose')

const dbConnect = () => {
    const URI_DB = process.env.URL_DB

    mongoose.connect('mongodb+srv://admin123:12345678joel@iventas.geh69.mongodb.net/iVentasDB?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION ESTABLECIDA **** ');
        } else {
            console.log('**** FAlLO AL CONECTARSE A LA BD **** ', err);
        }
    })
}

module.exports = {dbConnect}