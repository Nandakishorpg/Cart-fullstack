const express = require('express')
const orderRouter = express.Router()
const order = require('../models/order')

orderRouter.post('/', function (req, res) {

    console.log(JSON.stringify(req.body));
    let data = {
        userId: req.body.user_id,
        productId: req.body.productId,
        userName: req.body.username,
        ProductName: req.body.productName,
        type: req.body.type,
        price: req.body.price,
        count: req.body.count,
        quantity: req.body.quantity

    }
    console.log("data", data);
    let order_items = order(data)

    order_items.save().then(() => {

        res.status(200).json({
            success: true,
            error: false,
            message: 'order checked out',
            data: data
        })

    })
        .catch((err) => {
            res.status(401).json({
                success: false,
                error: true,
                data: err,
                message: 'something went wrong'

            })
        })




})
orderRouter.get('/view', function (req, res) {

    order.aggregate([
        {
          '$lookup': {
            'from': 'product_tbs', 
            'localField': 'productId', 
            'foreignField': '_id', 
            'as': 'result'
          }
         
        },
        {
            '$unwind': '$result'
        },
        {
        "$group": {
            '_id': "$_id",
           
            'productName': { "$first": "$result.productName" },
            



        }}

      ])
    .then((data) => {
        console.log("joined Data",data);
        return res.status(200).json({
            success: true,
            error: false,
            data: data


        })

    })
})



module.exports = orderRouter