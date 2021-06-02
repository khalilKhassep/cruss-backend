const bcrypt = require('bcryptjs');
const path = require('path');

const database = require(path.resolve(process.env.DATABASE_DIR + '/db'));

class AdminController {
    table;
    constructor() {
        this.table = 'admin'
    }
    static async create(values) {
        const table = 'admin'
        
        return new Promise(async (resolve, reject) => {
            if (Object.keys(values).length) {
                const salt = await bcrypt.genSalt();
                const hasedPassword = await bcrypt.hash(values.password, salt);
                values.password = hasedPassword;
                const resolved = database.makeValues(values)
                    .then(resolved => database.queryBuilder(resolved, table))
                    .then(resolved => database.statment(resolved.query, resolved.values))
                    .then(resolved => resolved);

                resolve(resolved);
            }
            reject({
                values: values,
                message: "There is no values"
            })
        });

    } 
} 

module.exports = AdminController;