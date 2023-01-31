const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const router = express.Router();
const db = require('../models/conn.js');

const User = require('../models/mongoUser');

router.get('/', (req, res) => {
    res.render('signup',{message: ' '});
})


router.post('/', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        signup()
        async function signup(){
                const check = await User.findOne({email: req.body.email});
                if (check == null){
                    const user = new User({name: req.body.name, email: req.body.email, password: hashedPassword});
                    await user.save((error,data)=>{
                        if(error){
                            console.log(error);
                        }else{
                            console.log("Created new user");
                        }
                    });
                    res.render('info',{message: 'User created succesfully '}); // add please login or redirection to login page
                }
                else{
                    res.render('info',{message: 'Error, emal already exists'});
                }
        }
    }catch{
        res.status(500).send();
        res.render('signup',{message : 'Ups something went wrong!'}); // TODO: render error page with message 
    }
}) 
module.exports = router;