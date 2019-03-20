const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/* let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}; */

let Schema = mongoose.Schema;

let empresaSchema = new Schema({
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
    img: {
        type: String,
        required: false
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
        default: 'EMPRESA_ROLE',
        enum: rolesValidos
    },
    codPostal: {
        type: Number,
        required: true
    },
    cif: {
        type: String,
        required: true
    }

});

empresaSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

empresaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Empresa', empresaSchema);