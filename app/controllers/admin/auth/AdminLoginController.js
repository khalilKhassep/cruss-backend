
const path = require('path');
const bcrypt = require('bcryptjs');
const AdminModel = require(path.resolve(`${process.env.MODELS_PATH}/Admin`));

class AdminLoginController {

   constructor(email, password) {
      this.email = email;
      this.password = password;
   }

   static showLoginForm() {
           
   }
   async login() {

      const response = await AdminModel.getAdminByEmail(this.email)
         .then(resolved => this.checkCredentioan(resolved))
         .then(resolved => resolved)
         .catch(error => error);;
      return response;
   }

   checkCredentioan(credeintial) {

      return new Promise(async (reslove, reject) => {
         const loging = await bcrypt.compare(this.password, credeintial.admin.password);
          
         if (loging && this.email === credeintial.admin.email) {
             return reslove({ 
                admin:credeintial.admin,
                authenticated:credeintial.isFound && loging,
                isFound:credeintial.isFound,
                isPassowrd:loging,
             });
         }

         if(!loging && this.email === credeintial.admin.email)
         {
            return reslove({
               authenticated: credeintial.isFound && loging,
               isFound: credeintial.isFound,
               isPassowrd: loging
            })
         }

      return reject({
         authenticated: credeintial.isFound && loging,
         isFound: credeintial.isFound,
         isPassowrd: loging
      })

      })

   }
}

module.exports = AdminLoginController;