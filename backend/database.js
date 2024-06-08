import mysql from "mysql2"

import dotenv from "dotenv"

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getAlleKonten() {
    const [konten] = await pool.query("select * from konto");
    return konten;
}

export async function getKonto(nummer) {
    const [konto] = await pool.query("select * from konto where nummer = ?", [nummer]);
    return konto[0];
}

export async function createKonto(nummer, bezeichnung) {
    const konto = await pool.query("insert into konto (nummer, bezeichnung, soll, haben) values (?, ?, 0, 0)", [nummer, bezeichnung]);
    return konto[0];
}

export async function updateKontoSoll(nummer, soll) {
    const [konto] = await pool.query("update konto set soll = ? where nummer = ?", [soll, nummer]);
    return konto[0];
}

export async function updateKontoHaben(nummer, haben) {
    const [konto] = await pool.query("update konto set haben = ? where nummer = ?", [haben, nummer]);
    return konto[0];
}

export async function deleteKonto(nummer) {
    const [konto] = await pool.query("delete from konto where nummer = ?", [nummer]);
    return konto;
}

/*console.log(await getKonto(2800));
//console.log(await createKonto(4000, 'Handelswaren-Erlöse'));
console.log(await updateKonto(4000, 2000));
console.log(await deleteKonto(2080));
console.log(await getAlleKonten());*/