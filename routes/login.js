const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const app = express();
const db = require('../models/conn.js');

const User = require('../models/mongoUser');

app.use(express.json());

router.get('/', (req, res) => {
    res.render('login');
})


router.post('/', async (req, res) => {
    try{
        login()
        async function login(){
            //searching through mongodb if such email exists
                const check = await User.findOne({email: req.body.email}); //check is already getting all the user data so we can operate on it
                if (check != null){
                    //compares the password with the one in the database using bcrypt
                    bcrypt.compare(req.body.password, check.password, (err, result) => {
                        if (result == true){
                             //if password is correct sends user to home page
                            console.log("password is correct")
                            // start JWT token
                            //  *************
                            //  *************
                            //  *************
                            //  *************
                            //  *************
                        }else{
                            //if password is incorrect sends error
                            console.log("password is incorrect")
                        }
                    })  
                }
                else{
                    //if user does not exist sends error
                    console.log("user does not exist)")
                }
        }
    }catch{
        res.status(500).send();
        res.render('signup',{message : 'Ups something went wrong!'}); // TODO: render error page with message 
    }
})
module.exports = router;