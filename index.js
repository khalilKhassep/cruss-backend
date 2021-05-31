const express = require('express');
const session = require('express-session');
const app = express();
const port = 3333;

const db = require('./app/database/db');
const adminRoutes = require('./app/admin/routes');

app.use(express.json());
// db.init(); 
//db.statment();
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'keyboard cat'
}));
app.get('/', (req, res) => {
    res.send('hello first responns')
    console.log(req);
});

app.use('/admin', adminRoutes);
app.listen(port, () => {
    console.log("App start")
});

//Read documentation of moduling in nodejs 
// Get to know to use imports and exports in nodejs 
// Using type module remove the default usage of require funciton that responsiable for requiring packges
//@todo 
/**
 * Rest API for admin
 *  - Create Staff
 *  - Edit Staff
 *  - Update staff
 *
 */