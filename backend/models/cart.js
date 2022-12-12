const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/shoppingdb?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const cartSchema = new Schema({

    productId: { type: Schema.Types.ObjectId,ref:"product_tb"},
    userId: { type: Schema.Types.ObjectId,ref:"register_tb" },
    count: {type: Number},
    status: {type: String}


})

var cartData = mongoose.model('cart_tb', cartSchema)
module.exports = cartData;

