//const main = require('../main')
const mysql = require('mysql');
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'userwork',
  password: 'work',
});

db.connect(function (err){
    if (err) {throw err};
    console.log("Conectado!");

    
})
