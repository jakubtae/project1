const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/mongoUser');

router.get('/', (req, res) => {
    res.render('signup',{message: ' '});
})


router.post('/', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        signup()
        async function signup(){
            check();
             async function check(){
                await User.findOne({email: req.body.email});
                if (check= null){
                    const user = new User({name: req.body.name, email: req.body.email, password: hashedPassword});
                    await user.save();
                    res.redirect("/")
                }
                else(
                    res.send('Email already exists')
                )
            }    
        }
        // if successful, redirect to home page and pass variable message: "Logged in"
    }catch{
        res.status(500).send();
        res.render('signup',{message : 'Ups something went wrong!'});
    }
}) 
module.exports = router;