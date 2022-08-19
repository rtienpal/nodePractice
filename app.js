const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get("/", (req, res) => {
    const blogs = [
        {title: "Blog1 test", snippet: "Lorem ipsum dolor sit amet"},
        {title: "Blog2 test", snippet: "Lorem ipsum dolor sit amet"},
        {title: "Blog3 test", snippet: "Lorem ipsum dolor sit amet"},
    ]
    res.render('index', {title: "Home", blogs})
}) 

app.get("/about", (req, res) => {
    res.render('about', {title: "About"})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: "Create new blog"}); 
}) 

app.use((req, res) => {
    res.status(404).render('404', {title: "Error 404"})
})