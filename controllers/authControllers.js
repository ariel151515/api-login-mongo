const User = require("../models/User");

// Guarda al usuario en la base de datos 
const registerUser = async (req, res) => {
    const { name, email, password, tokenConfirm } = req.body;
    try {

        let user = await User.findOne({ email })
        if (user) throw new Error('Ya existe el usuario')

        user = new User({ name, email, password, tokenConfirm })
        await user.save()

        // Enviar correo electronico con la confirmacion de la cuenta
        // res.redirect('/login')
        res.send('Usuario registrado con exito')
        console.log('El usuarios e creo con exito')

    } catch (error) {
        res.json({ error: error.message });
        console.log(error)
    }

}


const confirmarCuenta = async (req, res) => {
    const { token } = req.params

    try {
        const user = await User.findOne({ tokenConfirm: token })
        if (!user) throw new Error('No existe este usuario')

        user.cuentaConfirmada = true
        user.tokenConfirm = null

        await user.save();

        //res.json(user)
        res.redirect('/login')
    } catch (err) {
        res.json({ err: err.message });
    }

}



const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email })
        if (!user) throw new Error('No existe este email')

        if (!user.cuentaConfirmada) throw new Error('Falta confirmar cuenta')

        // compara las contraseñas encriptadas
        if (!await user.comparePassword(password)) throw new Error('Contraseña no correcta')
        res.send('login exitoso!')
        //res.redirect('/')

    } catch (err) {
        res.json({ err: err.message });
    }
}


const home = (req, res) => {
    res.send('Home')
}



module.exports = {
    loginUser,
    registerUser,
    home,
    confirmarCuenta
}