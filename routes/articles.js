const express = require('express')
// setup our router by calling it 
// as a function from the express module
const router = express.Router()

router.get('/', (req, res) => {
    res.send('')
})

module.exports = router