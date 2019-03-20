const mongoose = require('mongoose');
//const Usuario = mongoose.model('Usuario');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let proyectoExtSchema = new Schema({
    pertenece: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    enlace: {
        type: String
    }
});


module.exports = mongoose.model('ProyectoExterno', proyectoExtSchema);