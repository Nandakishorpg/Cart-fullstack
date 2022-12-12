const express = require('express')
const productViewRouter = express.Router()
const productView = require('../models/product')




productViewRouter.get('/', function (req, res) {

    productView.find().then((data) => {
        return res.status(200).json({
            success: true,
            error: false,
            data: data
        })

    })


});

productViewRouter.get('/single-view/:name', function (req, res) {
    const id = req.params.name
    productView.find({ _id: id }).then((data) => {
        return res.status(200).json({
            success: true,
            error: false,
            data: data
        })

    })


});

productViewRouter.get('/delete/:id', (req, res) => {
    const productId = req.params.id
    console.log("productID", productId);

    productView.findByIdAndDelete({ _id: productId }).then
        ((data) => {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Product Removed'
            })

        }).catch((err) => {
            return res.status(401).json({
                success: false,
                error: true,
                data: err

            })

        })


})





module.exports = productViewRouter