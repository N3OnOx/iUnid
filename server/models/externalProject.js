const mongoose = require('mongoose');
//const Usuario = mongoose.model('Usuario');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let externalProjectSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});


module.exports = mongoose.model('ExternalProject', externalProjectSchema);