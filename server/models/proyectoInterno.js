const mongoose = require('mongoose');
//const Usuario = mongoose.model('Usuario');
const uniqueValidator = require('mongoose-unique-validator');

/* let estadosProyecto = {
    values: ['Abierto', 'En curso', 'Cerrado'],
    message: '{VALUE} no es un rol válido'
}; */

let Schema = mongoose.Schema;

let proyectoIntSchema = new Schema({
    pertenece: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    archivos: {
        type: Array,
        default: {
            'nombre': '',
            'ruta': ''
        }
    },
    maxPrecio: {
        type: Number,
        default: 0
    },
    minPrecio: {
        type: Number,
        default: 0
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    contraOferta: {
        type: Boolean,
        default: false
    },
    estado: {
        type: String,
        default: 'Abierto',
        enum: estadosProyecto
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    entregaIntermeda: {
        type: Array,
        default: {
            'nombre': '',
            'ruta': ''
        }
    }
});


module.exports = mongoose.model('ProyectoInterno', proyectoIntSchema);