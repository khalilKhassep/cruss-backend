const path = require('path');
const express = require('express');
const router = express.Router();
const AdminLoginController = require('./controller/AdminLoginController');
const AdminContoller = require('./controller/AdminController');

router.post('/', (req, res) => {

    AdminContoller.create(req.body).then(resolved => console.log("resoloved => ", resolved));
});

router.post('/login', (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;
    const admin = new AdminLoginController(email, password)
    admin.login().then(resolved => res.send(resolved))
});


// router.get('/' , (req,res) => {
//     res.send("admin main homepage");
// });

module.exports = router;