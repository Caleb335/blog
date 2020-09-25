const express = require('express')
const router = require('./routes/articles')
const articleRoutes = require('./routes/articles') 
// assigning the `express` var to the
// app instance.
const app = express()

// setting the view (ejs) so 
// actual html markup gets send to
// the browser
app.set('view engine', 'ejs')

// tell the app to use the article router
app.use('article', articleRoutes) 

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8000) 