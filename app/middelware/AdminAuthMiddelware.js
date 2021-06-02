const session = require("express-session");

module.exports = function(req,res,next){
    if(req.session.authenticated)
    {   
        next(); 
    
    }else{
        console.log(req.session)
        res.redirect('/admin/login');
    }
}