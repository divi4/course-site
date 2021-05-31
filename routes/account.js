const express = require('express')
const router = express.Router()
const accountController = require('../controllers/account')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const multer = require("multer")
const upload = multer({dest: "public/uploads/images"})

router.get('/', ensureAuth, accountController.getAccount)
router.post("/upload", upload.single('photo'), accountController.createPost)
router.put("/updateLike", accountController.updateLike)
router.delete("/deletePost", accountController.deletePost)

module.exports = router
