const express = require('express')
const productRouter = express.Router()
const product = require('../models/product')
const multer = require("multer")

var storage = multer.diskStorage({

    destination: function (req,file,cb) {
        cb(null, "../cart-assignment/public/product")
    },
    filename: function(req,file,cb){
        cb(null,req.body.name)
        
    }
})

var upload = multer({ storage:storage })
productRouter.post('/upload', upload.single("file"), (req, res) => {

    return res.json("file uploaded")
})


productRouter.post('/', function (req, res) {

    console.log("data" + JSON.stringify(req.body))

    let productData = {
        productName: req.body.productName,
        type: req.body.type,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: 'product/'+req.body.image
    }

    console.log("productData", productData)
    let product_item = product(productData)

    product_item.save()

        .then(() => {

            res.status(200).json({
                success: true,
                error: false,
                message: 'products added'
            })

        })
})


module.exports = productRouter