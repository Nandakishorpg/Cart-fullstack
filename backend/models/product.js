const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/shoppingdb?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const ProductSchema = new Schema({
    productName: { type: String },
    type: { type: String },
    price: { type: Number },
    quantity: { type: String },
    description: { type: String },
    image: {type: String}

})
var productData = mongoose.model('product_tb', ProductSchema)
module.exports = productData;