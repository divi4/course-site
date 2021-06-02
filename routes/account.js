const express = require('express')
const router = express.Router()
const accountController = require('../controllers/account')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const multer = require("multer")
const upload = multer({dest: "public/uploads/images"})

router.get('/', ensureAuth, accountController.getAccount)

module.exports = router
