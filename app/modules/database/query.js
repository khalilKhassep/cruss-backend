

const adminTable = "CREATE TABLE admin (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT  ," +
    "name TEXT NOT NULL," +
    "email TEXT NOT NULL," +
    "created_at TIMESTAMP DATETIME DEFAULT CURRENT_TIMESTAMP," +
    "updated_at TIMESTAMP DATETIME " +
    ")";

const staffTable = `CREATE TABLE staff(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     created_at TIMESTAMP DATETIME DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DATETIME NULL
 )`;

const permesionTable = `CREATE TABLE rules (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     key TEXT NOT NULL,
     value TEXT NOT NULL
 )`;
const addPasswordCol = `ALTER TABLE staff ADD COLUMN password text not null`;

const insertIntoAdmin = `INSERT INTO admin (name , email , password) VALUES ($name ,$email ,$password)`;




const query = {
    'creaetAdminTable': adminTable,
    'createStaffTable': staffTable,
    'createRullesTable': permesionTable,
    'addPasswordCol': addPasswordCol,
    'insertIntoAdmin': insertIntoAdmin,
}


module.exports = query;