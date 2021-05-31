const express = require('express')
const router = express.Router()
const masteryController = require('../controllers/mastery')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get("/dashboard", ensureAuth, masteryController.getDashboard)
router.get('/articles', masteryController.getArticles)
router.get('/account', masteryController.getAccount)

module.exports = router
