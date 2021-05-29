const bcrypt = require('bcryptjs');

const database = require('../../database/db');
class AdminController {
    table;
    constructor() {
        this.table = 'admin'
    }
    static async create(values) {
        const table = 'admin'
        const salt = await bcrypt.genSalt();
        const hasedPassword = await bcrypt.hash(values.password, salt);
        values.password = hasedPassword;
        return new Promise((resolve,reject) => {
            const resolved =  database.makeValues(values)
                .then(resolved => database.queryBuilder(resolved, table))
                .then(resolved => database.statment(resolved.query, resolved.values))
                .then(resolved => resolved);

              resolve(resolved);
            });



    }
}

module.exports = AdminController;