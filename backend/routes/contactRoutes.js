const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const contactControlers = require('../controlers/contactControlers')

router.get('/', contactControlers.contact_index_get)
router.post('/newContact', contactControlers.contact_index_post)
router.get('/contactDetail/:id', contactControlers.contact_detail_get)
router.get('/favorites', contactControlers.contact_favorites_get)
router.put('/makeFav', contactControlers.contact_add_favorite)
module.exports = router;