const express = require('express')
const cors = require("cors");
const app = express()

// Nesesarios para conecytar a a base de datos
require('dotenv').config()
require('./database/db')
//require('./routes/auth')

app.use(cors());
app.use(express.json())
app.use("/api", require("./routes/auth"))
app.use("/", require("./routes/auth"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('servidor andando', PORT))