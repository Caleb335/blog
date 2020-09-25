const express = require('express')

// assigning the `express` var to the
// app instance.
const app = express()

// setting the view (ejs) so 
// actual html markup gets send to
// the browser
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000) 