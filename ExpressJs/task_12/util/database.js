const sql =require("mysql2");
const pool = sql.createPool({
    host:'localhost',
    user:'root',
    database:'biplabdb',
    password:'Biplab@1997'
});
module.exports = pool.promise();