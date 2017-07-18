const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Customer = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    birthday: {
        day: {
            type: Number,
            required: true,
            default: ''
        },
        month: {
            type: Number,
            required: true,
            default: ''
        },
        year: {
            type: Number,
            required: true,
            default: ''
        }
    },
    cpf: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        complement: {
            type: Number,
            required: false
        },
        city: {
            type: String,
            required: true
        }
    },
})

Customer.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('Customer', Customer)