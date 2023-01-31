const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const app = express();
const db = require('../models/conn.js');


app.use(express.json());

router.get('/', (req, res) => {
    res.render('login');
})


router.post('/', async (req, res) => {
    //searching through mongodb if such email exists
    try{
        login()
        async function login(){
                const check = await User.findOne({email: req.body.email});
                if (check != null){
                        //if yes checkes password
                        //compares the password with the one in the database using bcrypt
                         //if password is incorrect sends error
                         //if password is correct sends user to home page
                    
                }
                else{
                    //if no sends error
                }
        }
    }catch{
        res.status(500).send();
        res.render('signup',{message : 'Ups something went wrong!'}); // TODO: render error page with message 
    }
})
module.exports = router;