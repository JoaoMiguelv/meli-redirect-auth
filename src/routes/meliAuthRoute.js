const express = require('express')
const router = express.Router()
const meliAuthController = require("../controllers/meliAuthController")
this.meliAuthController = new meliAuthController()

router.get('/redirect', this.meliAuthController.redirectAuth);

module.exports = router;