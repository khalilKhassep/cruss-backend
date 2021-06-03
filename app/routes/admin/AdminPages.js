const express = require('express');
const path = require('path');
const router = express.Router();
const session = require('express-session');

const AdminContoller = require(path.resolve(`${process.env.CONTROLLER_PATH}/admin/AdminController`));
const Admin = require(path.resolve(`${process.env.MODELS_PATH}/Admin`));
const AdminAuthMiddelware = require(path.resolve(`${process.env.MIDDELWARE}/AdminAuthMiddelware`));


router.get('/', AdminAuthMiddelware, async (req, res) => {
    const user = await Admin.getAdminByEmail(req.session.admin.email)
    res.render('admin/Home', { user })
});
router.get('/home', AdminAuthMiddelware, async (req, res) => {
    const user = await Admin.getAdminByEmail(req.session.admin.email).then(resolved => resolved);
    console.log("ADmin", user);
    res.render('admin/home')
});
router.post('/create', AdminAuthMiddelware, (req, res) => {
    AdminContoller.create(req.body)
        .then(resolved => res.send(resolved))
        .catch(erorr => res.send(erorr));
});
//User Admin manger

router.get('/user/create' , AdminAuthMiddelware , (req,res) => {
    res.render('admin/pages/MemberCreate');
})

module.exports = router;