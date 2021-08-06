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
            res.json({ redirect: "/404" })
        })

}

const contact_add_post = (req, res) => {
    console.log(req.body)
    const contact = new Contact({
        //my req.body but more defined
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        avatar_url: req.body.avatar,

        private: {
            p_email: req.body.email,
            p_phone: {
                mobile: req.body.p_phone,
                home: req.body.p_phone
            },
            p_address: {
                city: req.body.p_city,
                country: req.body.p_country,
                street: req.body.p_street,
                postalcode: req.body.postalcode,
                streetNr: req.body.p_streetNr
            },
        },
        work: {
            jobTitle: req.body.jobTitle,
            w_phone: req.body.w_phone,
            w_org: {
                name: req.body.org_name,
                address: req.body.w_address,
                department: req.body.w_department
            }
        },
        notes: req.body.w_notes,
        isFamily: (req.body.Family == 'on' ? true : false),
        isFriend: (req.body.Friend == 'on' ? true : false),
        isAcquaintance: (req.body.Acquaintance == 'on' ? true : false),
        isColleague: (req.body.Colleague == 'on' ? true : false),
        isFavorite: false
    })
    contact.save()
        .then((result) => {
            console.log(result)
            res.json({ redirect: "/" })
        })
        .catch((err) => {
            console.log(err)
            res.json({ redirect: "/404" })
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
            res.json({ redirect: "/404" })
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
            res.json({ redirect: "/404" })
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