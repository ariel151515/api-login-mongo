const User = require("../models/User");


// Guarda al usuario en la base de datos 
const registerUser = async (req, res) => {
    const { name, email, password, tokenConfirm } = req.body;
    try {
        let user = await User.findOne({ email })
        if (user) throw new Error('Ya existe el usuario')

        user = new User({ name, email, password, tokenConfirm })
        await user.save()
        console.log('El usuarios e creo con exito')

    } catch (error) {
        res.json({ error: error.message });
        console.log(error)
    }

}


const loginForm = (req, res) => {
    res.send('Esta eslogin')
}


const home = (req, res) => {
    res.send('Home')
}

module.exports = {
    loginForm,
    registerUser,
    home
}