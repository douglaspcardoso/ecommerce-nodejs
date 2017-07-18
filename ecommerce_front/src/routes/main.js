const express = require('express')
const router = express.Router()

router.get('/', require('./../services/main/index'))

module.exports = router
