const Contact = require('../models/contact')

const contact_index_get = (req, res) => {
    console.log('a get request ')
    Contact.find().sort({})
        .then((result) => {
            console.log(result)
            res.json(result)
            res.end()
        })
        .catch((err) => {
            console.log(err)
            // res.end()
        })

}

const contact_add_post = (req, res) => {
    console.log(req.body)
    const contact = new Contact({
        //my req.body but more defined
        // contact.name.firstName: req.body.firstName,
        // contact.name.lastName: req.body.lastName,
    })
    contact.save()
        .then((result) => {
            console.log(result)
            res.end()
        })
        .catch((err) => {
            console.log(err)
            res.end()
        })
}
const contact_detail_get = (req, res) => {
    console.log(req.params.id)
    Contact.findById(req.params.id)
        .then((result) => {
            console.log(result)
            res.json(result)
            res.end()
        })
        .catch((err) => {
            console.log(err)
            res.end()
        })
}
const contact_favorites_get = (req, res) => {
    console.log('a favorite request ')
    Contact.find({ isFavorite: true })
        .then((result) => {
            console.log(result)
            res.json(result)
            res.end()
        })
        .catch((err) => {
            console.log(err)
            res.end()
        })
}

const contact_add_favorite = (req, res) => {
    console.log(req.params.id)
    const currentContact = Contact.where({ _id: req.params.id });
    console.log(currentMovie)
    currentContact.update({ $set: { isFavorite: true } }).exec()
    console.log('contact added as favorite')

    //     .then((result) => {
    //         console.log('movie added as favorite')
    //         console.log(result)
    //         res.render('movieDetail', { myPageTitle: `${appName}|MOVIE DETAIL`, movieFound: currentMovie })
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //         console.log(err)
    //     })

}
// const contact_remove_favorite = (req, res) => {
//     console.log(req.params.id)
//     const currentMovie = Movie_Item.where({ _id: req.params.id });
//     console.log(currentMovie)
//     currentMovie.update({ $set: { isFavorite: false } }).exec()
//     console.log('movie removed from favorite')
//     res.redirect('/favorites')

// }

module.exports = {
    contact_index_get,
    contact_add_post,
    contact_detail_get,
    contact_favorites_get,
    contact_add_favorite
    // contact_remove_favorite
}