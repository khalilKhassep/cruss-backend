const bcrypt = require('bcryptjs');
const AdminModel = require('../../model/Admin');

class AdminLoginController {
   
    constructor(email,password){
       this.email = email;
       this.password = password;
    }
   async login() {

    const response = await AdminModel.getAdminByEmail(this.email)
    .then(resolved => this.checkCredentioan(resolved))
    .then(r=>console.log(r))
    .catch(error => error);;
    return response;
  }
  
   checkCredentioan(credeintial)
  {
     return new  Promise(async (reslove,reject) => {
      const loging = await bcrypt.compare(this.password , credeintial.password);
      if(loging) return reslove({status:"Admin verfid",logged:loging});
      reject(loging)
     })
    
  }

}

module.exports = AdminLoginController;