import mysql from "mysql2"

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "accounting"
}).promise();

const result = await pool.query("SELECT * FROM Konto WHERE nummer = 2700");
console.log(result);