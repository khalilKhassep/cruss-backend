const path = require('path');
const url = require('url');

const express = require('express');
const router = express.Router();

const AdminPagesRoutes = require(path.resolve(`${process.env.ROUTES_PATH}/admin/AdminPages`))
const AdminLoginController = require('../controllers/admin/auth/AdminLoginController');
const AdminContoller = require('../controllers/admin/AdminController');
const Admin = require('../models/Admin');
const session = require('express-session');
const AdminAuthMiddelware = require(path.resolve(`${process.env.MIDDELWARE}/AdminAuthMiddelware`));
const TestMiddelWare = require(path.resolve(`${process.env.MIDDELWARE}/TestMiddelWare`))

//Home routes

router.use(AdminPagesRoutes)

 
//Auth routes 

router.post('/login', (req, res, next) => {

    const email = req.body.email; 
    const password = req.body.password;

    const admin = new AdminLoginController(email, password)
    
    admin.login()
        .then(resolved => {
            
            if (resolved.authenticated) {
                const admin = resolved
                req.session.authenticated = admin.authenticated;
                req.session.admin = admin.admin;
                res.redirect('/admin/home')
            }
            if (resolved.isFound && !resolved.isPassword){
                console.log(resolved)
                res.render('admin/auth/login' , {message:"Password is wrond"})
            }
            if(!resolved.isFound)
            {
                res.render('admin/auth/login' ,{message:"Email not found"})
            }
        }) 
        .catch(err => console.log(err)) 
});


router.get('/login', (req, res) => {
    res.render('admin/auth/login', { name: "khalil_hello me" });
});
router.get('/test', AdminAuthMiddelware, (req, res) => {
   res.render('admin/pages/Private');
})

module.exports = router;