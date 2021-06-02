
const database = require('../modules/database/db');
class Admin {

    static async getAdminByEmail(email) {
        return new Promise((resolve, reject) => {
            const db = database.connect;
            const query = `SELECT * FROM admin WHERE email = ? `;
            db.get(query, email, function (err, row) {

                if (row !== undefined && err === null) {
                    return resolve({
                        admin: row,
                        isAdmin: true,
                        isFound: true
                    });
                } else if (err === null && row === undefined) {
                    return reject({
                        isAdmin: false,
                        isFound: false,
                        authenticated: false,
                        message: `No Admin found for this ${email}`
                    });
                }
            });

        });
    }

}

//Get admin by email
//Get admin by id
module.exports = Admin;