const mongoose = require('mongoose');
//const Usuario = mongoose.model('Usuario');
const uniqueValidator = require('mongoose-unique-validator');

/* let estadosProyecto = {
    values: ['Abierto', 'En curso', 'Cerrado'],
    message: '{VALUE} no es un rol válido'
}; */

let Schema = mongoose.Schema;

let internalProjectSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    files: {
        type: Array,
        default: {
            'name': '',
            'route': ''
        }
    },
    maxPrice: {
        type: Number,
        default: 0
    },
    minPrice: {
        type: Number,
        default: 0
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    counteroffer: {
        type: Boolean,
        default: false
    },
    state: {
        type: String,
        default: 'Open',
        enum: estadosProyecto
    },
    initialDate: {
        type: Date,
        required: true
    },
    delivery: {
        type: Array,
        default: {
            'name': '',
            'route': ''
        }
    }
});


module.exports = mongoose.model('InternalProject', internalProjectSchema);