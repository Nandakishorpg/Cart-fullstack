const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/shoppingdb?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const OrderSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: "register_tb" },
    userName: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: "product_tb" },
    count: { type: Number },
    productName: { type: String },
    type: { type: String },
    price: { type: Number },
    quantity:{type:Number}



})
var orderData = mongoose.model('order_tb', OrderSchema)
module.exports = orderData;
