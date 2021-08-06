require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const Contact = require('./backend/models/contact')
const apiRoutes = require('./backend/routes/contactRoutes')

mongoose.connect(process.env.db_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((result) => {
        console.log('connection to db')
        app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) })
    })
    .catch((err) => { console.log(err) })

// app.get('/', (req, res) => {
//     console.log('homepage')
//     console.log(req.body)
//     Contact.find()
//         .then((result) => {
//             console.log(result)
//             res.end()
//         })
//         .catch((err) => { console.log(err) })
// })

// app.post('/post', (req, res) => {
//     console.log('post made')
//     const contact = new Contact(req.body)
//     console.log(req.body)
//     contact.save()
//         .then((result) => {
//             console.log(result)
//             res.end()
//         })
//         .catch((err) => { console.log(err) })
// })



app.use('/api/contacts', apiRoutes)