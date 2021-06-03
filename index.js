const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config()

const app = express();
const port = 3333;

const db = require('./app/modules/database/db');
const adminRoutes = require('./app/routes/AdminRoutes');
app.use(express.urlencoded({ extended: true }))
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
 
app.use(express.json());

app.use(session({ 
    resave: false, 
    saveUninitialized: true, 
    secret: 'hellome'
}));
 
app.set('views' ,path.resolve(process.env.VIEWS_PATH));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
 
 app.get('/' , (req,res)=>{
     res.render('index')
 })
app.use('/admin', adminRoutes); 


app.listen(port, () => {
    console.log("App start")
});


//@todo 
/**
 * Rest API for admin
 *  - Create Staff
 *  - Edit Staff
 *  - Update staff
 *
 */