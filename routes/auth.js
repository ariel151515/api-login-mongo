const express = require("express")
const router = express.Router();

const { loginForm, registerUser, home } = require("../controllers/authControllers");

router.get("/login", loginForm)
router.post("/register", registerUser)
router.get("/", home)


module.exports = router;