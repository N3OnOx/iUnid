const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/* let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}; */

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    },
    descripcion: {
        type: String,
        required: false
    },
    valoracion: {
        type: Number,
        required: false
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    habilidades: {
        type: Array,
        default: []
    },
    cursos: {
        type: Array,
        default: {
            'nombre': '',
            'ruta': ''
        }
    },
    certificados: {
        type: Array,
        default: {
            'nombre': '',
            'imgCert': ''
        }
    },
    img: {
        type: String,
        required: false
    },
    google: {
        type: Boolean,
        default: false
    },
    linkedin: {
        type: Boolean,
        default: false
    },
    facebook: {
        type: Boolean,
        default: false
    },
    tipoUsuario: {
        type: String,
        default: 'INDIVIDUAL_ROLE',
        enum: rolesValidos
    },
    codPostal: {
        type: Number,
        required: true
    }

});

usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);