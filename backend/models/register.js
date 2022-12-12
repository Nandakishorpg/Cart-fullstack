const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/shoppingdb?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
})
var userData = mongoose.model('register_tb', UserSchema)
module.exports = userData;