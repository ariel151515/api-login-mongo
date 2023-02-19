const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        require: true,
    },
    email: {
        type: String,
        lowercase: true,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    tokenConfirm: {
        type: String,
        default: null,
    },
    cuentaConfirmada: {
        type: Boolean,
        default: false,
    }
})


userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next()

    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt)
        this.password = hash;
        next();

    } catch (err) {

        next();
    }
})



module.exports = mongoose.model('User', userSchema) //con esto crea la coleccion y accede al esquema