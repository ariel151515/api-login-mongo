const mongoose = require('mongoose')

//mongodb connection
mongoose
    .connect(process.env.URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));
