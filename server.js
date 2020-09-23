const express = require('express')

// assigning the `express` var to the
// app instance.

const app = express()

app.get(res, req => {
    res.send('Hello node blog')
})