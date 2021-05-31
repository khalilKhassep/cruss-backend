
const database = require('../database/db');
class Admin {

    static async getAdminByEmail(email) {
        return new Promise((resolve, reject) => {
            const db = database.connect;
            const query = `SELECT * FROM admin WHERE email = ? `;
            db.get(query, email, function (err, row) {
                if (row !== undefined && err === null) {
                    resolve(row);
                } else if (err === null && row === undefined) {
                    reject({
                    
                        message: `Now Admin found for this ${email}`,
                        email:email,
                        status: 404,
                    

                    })

                }
            });
           
        });

    }

}

//Get admin by email
//Get admin by id
module.exports = Admin;