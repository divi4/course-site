const express = require('express')
const router = express.Router()
const landingController = require('../controllers/landing')
const { ensureAuth, ensureGuest } = require("../middleware/auth")



router.get('/', landingController.getLanding)
router.get('/start-here', landingController.getStartHere)
router.get('/articles', landingController.getArticles)
router.get('/course-features', landingController.getCourse)
router.get("/login", ensureGuest, landingController.getLogin)

module.exports = router
