const express = require('express')
const loginRouter = express.Router()
const register = require('../models/register')


const bcrypt = require('bcryptjs')


loginRouter.post('/log', (req, res) => {
    console.log("logindata====", req.body);

    let fetchedUser
    register.findOne({ username: req.body.username }).then((user) => {


        if (!user) {
            return res.status(401).json({
                success: false,
                error: true,
                message: "User Not Found!"


            })
        }
        fetchedUser = user
        return bcrypt.compare(req.body.password, user.password)

    })
        .then(result => {
            if (!result) {
                return res.status(401).json({

                    success: false,
                    error: true,
                    message: "Please Check Password!"
                })

            }
            console.log(fetchedUser);

            return res.status(200).json({

                success: true,
                error: false,
                registerid:fetchedUser._id,
                name:fetchedUser.name,
                role:fetchedUser.role
            })

        }).catch((err)=>{
            return res.status(401).json({
        
                success: true,
                error: false,
                message: err
        
        
            })
        })
})

module.exports = loginRouter