const express = require('express')
const morgan = require("morgan")
const mongoose = require("mongoose")
const blogRoutes = require('./routes/blogRoutes')


const app = express()
const dbURI = "mongodb+srv://admin:admin123@node-practice.7nm5d5q.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(process.env.PORT || 5000)
    })
    .catch((err) => {
        console.log(err)
    })

app.set('view engine', 'ejs')



app.use(express.static('public'))
app.use(express.urlencoded( {extended: true }))
app.use(morgan('dev'))




app.get('/', (req, res) => {
    res.redirect('/blogs')
})


 
app.get("/about", (req, res) => {
    res.render('about', {title: "About"})
})

app.use('/blogs',blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', {title: "Error 404"})
})