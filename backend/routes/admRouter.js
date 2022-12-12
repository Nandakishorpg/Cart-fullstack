const express = require('express')
const admRouter = express.Router()
const admin = require('../models/register')



admRouter.get('/', function (req, res) {

    admin.find().then((data) => {
        return res.status(200).json({
            success: true,
            error: false,
            data: data
        })

    })


})

module.exports = admRouter