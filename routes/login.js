const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const app = express();



app.use(express.json());

router.get('/', (req, res) => {
    res.render('login');
})


router.post('/', async (req, res) => {
    const email = req.body.email;
    //searching through mongodb if such email exists
    
    //if no sends error

    //if yes checkes password

    //if password is incorrect sends error
    
    //if password is correct sends user to home page
})
module.exports = router;