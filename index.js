const express = require('express')
const app = express()

// Nesesarios para conecytar a a base de datos
require('dotenv').config()
require('./database/db')

app.get('/', (req, res) => {
    res.send('Hola mundo')
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('servidor andando', PORT))