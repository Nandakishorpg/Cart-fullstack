const express = require('express')
const cartRouter = express.Router()
const cart = require('../models/cart')

var objectId = require('mongodb').ObjectID;




cartRouter.post('/', (req, res) => {

    console.log(JSON.stringify(req.body));

    let cartData = {

        productId: req.body.p_id,
        userId: req.body.u_id,
        count: 1,
        status: 0

    }

    console.log("cartData", cartData);
    let cart_details = cart(cartData)

    cart_details.save()

        .then(() => {

            res.status(200).json({
                success: true,
                error: false,
                message: 'details added'
            })

        })



})



cartRouter.get('/cartdata/:id', (req, res) => {
    const id = req.params.id
    // console.log(id);
    cart.aggregate([
        {
            '$lookup': {
                'from': 'product_tbs',
                'localField': 'productId',
                'foreignField': '_id',
                'as': 'productData'
            }
        }, {
            '$lookup': {
                'from': 'register_tbs',
                'localField': 'userId',
                'foreignField': '_id',
                'as': 'userData'
            }
        }, {
            '$unwind': '$productData'
        }, {

            '$unwind': '$userData'
        }, {

            '$match': {
                "userId": objectId(id)
            }
        }, {
            "$group": {
                '_id': "$_id",
                'count': { "$first": "$count" },
                'productId':{"$first":"$productData._id"},
                'productName': { "$first": "$productData.productName" },
                'type': { "$first": "$productData.type" },
                'price': { "$first": "$productData.price" },
                'image': { "$first": "$productData.image" },
                'quantity': { "$first": "$productData.quantity" },
                'description': { "$first": "$productData.description" },
                'name': { "$first": "$userData.name" },
                'user_id': { "$first": "$userData._id" },
                'username': { "$first": "$userData.username" }



            }
        }
    ]).then((data) => {
        if (data) {

            return res.status(200).json({
                success: true,
                error: false,
                data: data
            })

        } else {
            return res.status(401).json({
                success: false,
                error: true,

            })

        }

    }).catch((err) => {
        return res.status(401).json({
            success: false,
            error: true,
            data: err
        })

    })


})

cartRouter.get('/cartdatas/:productId', (req, res) => {
    const productId = req.params.productId

    console.log(productId);

    cart.findByIdAndDelete({ _id: productId }).then((data) => {
        return res.status(200).json({
            success: true,
            error: false,
            message: 'item deleted'
        })

    }).catch((err) => {
        return res.status(401).json({
            success: false,
            error: true,
            data: err

        })

    })




})


cartRouter.get('/cartdatass/:userId', (req, res) => {
    const userId = req.params.userId

    console.log("user", userId);

    cart.deleteMany({ userId: objectId(userId) }).then((data) => {
        return res.status(200).json({
            success: true,
            error: false,
            message: 'all items deleted'
        })

    }).catch((err) => {
        return res.status(401).json({
            success: false,
            error: true,
            data: err

        })

    })




})


//increase//

cartRouter.get('/increase/:id', (req, res) => {
    const userId = req.params.id
    console.log("userId", userId);
    cart.findById({ _id: userId }).then((productdetails) => {
        console.log(productdetails);
        const count = productdetails.count
        console.log("count is ", count);

        cart.updateOne({ _id: userId }, { $set: { count: count + 1 } }).then(function () {

            return res.status(200).json({
                success: true,
                error: false,
                message: 'Count increased',
            })

        }).catch((err) => {
            return res.status(401).json({
                success: false,
                error: true,
                message: "hy",
                data: userId,

            })

        })

})
})


cartRouter.get('/decrease/:id', (req, res) => {
    const userId = req.params.id
    console.log("userId", userId);
    cart.findById({ _id: userId }).then((productdetails) => {
        console.log(productdetails);
        const count = productdetails.count
        console.log("count is ", count);

        cart.updateOne({ _id: userId }, { $set: { count: count - 1 } }).then(function () {

            return res.status(200).json({
                success: true,
                error: false,
                message: 'Count decreased',
            })

        }).catch((err) => {
            return res.status(401).json({
                success: false,
                error: true,
                message: "hy",
                data: userId,

            })

        })

})
})





module.exports = cartRouter