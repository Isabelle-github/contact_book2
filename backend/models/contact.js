// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// // {
// //     "name": {
// //       "firstName": "Dalis",
// //       "lastName": "Drioli"
// //     },
// //     "avatar": "https://robohash.org/atquequiquasi.png?size=50x50&set=set1",
// //     "private": {
// //       "email": "ddrioli2@sitemeter.com",
// //       "phone": {
// //         "mobile": "382-783-4016",
// //         "home": "303-888-8123"
// //       },
// //       "address": {
// //         "country": "Brazil",
// //         "postalCode": "69600-000",
// //         "city": "São Paulo de Olivença",
// //         "street": "Canary",
// //         "streetNr": "450"
// //       }
// //     },
// //     "work": {
// //       "job": "Help Desk Technician",
// //       "phone": "714-520-7208",
// //       "org": {
// //         "name": "Huel, Mosciski and Pacocha",
// //         "department": "Support",
// //         "address": "83 Derek Point"
// //       }
// //     },
// //     "notes": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel"
// //   }
// const contactSchema = new Schema({
//     name: {
//         firstName: { type: String, required: false },
//         lastName: { type: String, required: false }
//     },
//     avatar_url: {
//         type: String,
//         required: false
//     },
//     private: {
//         p_email: { type: String, required: false },
//         p_phone: {
//             mobile: { type: String, required: false },
//             home: { type: String, required: false },
//         },
//         p_address: {
//             country: { type: String, required: false },
//             postalCode: { type: String, required: false },
//             city: { type: String, required: false },
//             street: { type: String, required: false },
//             streetNr: { type: Number, required: false },
//         },
//     },
//     work: {
//         jobTitle: { type: String, required: false },
//         w_phone: { type: String, required: false },
//         w_org: {
//             name: { type: String, required: false },
//             department: { type: String, required: false },
//             address: { type: String, required: false }
//         }
//     },
//     notes: { type: String, required: false },
//     isFamily: { type: Boolean, required: true, default: false },
//     isColleague: { type: Boolean, required: true, default: false },
//     isFriend: { type: Boolean, required: true, default: false },
//     isAcquaintance: { type: Boolean, required: true, default: false },
//     isFavorite: { type: Boolean, required: true, default: false }
// }, { timestamps: true })

// const Contact = mongoose.model('contact', contactSchema);
// module.exports = Contact;