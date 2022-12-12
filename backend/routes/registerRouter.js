const express = require('express')
const registerRouter = express.Router()
const booking = require('../models/register')
const bcrypt = require('bcryptjs')


registerRouter.post('/', function (req, res) {

    console.log("data" + JSON.stringify(req.body))
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            return res.sendStatus(400).json({
                success: false,
                error: true,
                message: 'password hashing error'
            })
        }
        else{
            let bookingData = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                username: req.body.username,
                password: hashedPass,
                role : 1
            }
            console.log("booking",bookingData);
            let booking_item = booking(bookingData)
        
            booking_item.save()
                .then(() => {
                    res.status(200).json({
                        success: true,
                        error: false,
                        message: 'registration completed',
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
        }
       

    })

    

});


module.exports = registerRouter
