const express = require("express")
const router = express.Router();

const {
    loginUser,
    registerUser,
    home,
    confirmarCuenta,
    muestraUsers
} = require("../controllers/authControllers");

router.get("/", home)
router.get("/users", muestraUsers)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/confirmacion/:token", confirmarCuenta)


module.exports = router;