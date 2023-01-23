const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('signup');
})

router.post('/', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        res.send(hashedPassword);
        res.status(201).send();
        //pushing email and hashed password to mongodb?
        // const user = new User({
        //     email: req.body.email,
        //     password: hashedPassword
        // });
        // await user.save();
        // if successful, redirect to home page and pass variable message: "Logged in"
    }catch{
        res.status(500).send();
    }
}) 
module.exports = router;