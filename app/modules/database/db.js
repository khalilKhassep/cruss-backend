const sqlite3 = require('sqlite3').verbose();
const { insert } = require('./query');
const query = require('./query');
const database = {
  connect: new sqlite3.Database('./database.db', function (err) {
    if (err === null) {
      console.log("Database connected");
    } else {
      console.log(err);
    }

  }),

  init: function () {
    const database = this.connect;
    database.serialize(function () {
      database.run(query.createStaffTable);
      database.run(query.createRullesTable);
      database.run(query.creaetAdminTable);
      database.run(query.addPasswordCol);
      database.close();
    });

  },

  statment: async function (query, values) {

    return new Promise((resolve, reject) => {
      const database = this.connect;
      database.serialize((function () {
        database.run(query, values, function (err) {
          if (err === null) {
            //console.log(this)
            const response = this;

            database.close();
            resolve(response);
          } else {
            database.close();
            return reject(err)
          }
        });
      }))
    })

  },
  makeValues: async (values) => {
    if (!Object.entries(values).length) throw new Error('Argnent is not an object' + values)
    const obj = {};
    const entries = Object.entries(values);
    entries.forEach(element => {
      let propValue = element[1];
      let propName = element[0].toString();
      propName = "$" + propName; // generate prop names in order to bind to query
      obj[propName] = propValue;
    });
    return Promise.resolve(obj);
  },
  queryBuilder: async (values, table) => {

    const keys = Object.keys(values); // Keys for values

    // remove $ sign from keys by cloning keys array to a new array holding keys
    const formatedValuesArr = keys.map(key => {
      return key.toString().replace("$", '')
    });
    // generate query string from formatedValues
    const columns = `(${formatedValuesArr.join(',')})`;
    const colValues = `(${keys.join(',')})`;

    //console.log(`INSERT INTO ${table} ${columns} VALUES ${colValues}`)
    const query = `INSERT INTO ${table} ${columns} VALUES ${colValues}`;
    return Promise.resolve({ query: query, values: values });

  },
  insert: query.insert

};



module.exports = database;
/**
 * Create database tables
 * Admin [id int pk auto increment , name varchar not null , email varcahr not null , created_at timestap null , updated_at timestap null]
 * Staff [id in pk auto increment , name varcahr not null, email not null , permesion default read /r]
 * Permission [id , key , value,numric_value]
 */