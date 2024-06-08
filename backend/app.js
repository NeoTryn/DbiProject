import express from 'express';

import { getKonto,
    deleteKonto,
    updateKontoSoll,
    updateKontoHaben,
    getAlleKonten,
    createKonto } from './database.js'

const app = express();

app.use(express.json());

const port = process.env.EXPRESS_PORT || 8080;

app.get('/konto', async (req, res) => {
    const konten = await getAlleKonten();
    res.status(200).send(konten);
})

app.get('/konto/nummer/:nummer', async (req, res) => {
    const nummer = req.params.nummer;
    const konto = await getKonto(nummer);
    if (konto === undefined) {
        res.status(404).send(`ERROR 404: No Konto with nummer ${nummer} found.`)
    }
    res.status(200).send(konto);
})

app.post('/konto', async (req, res) => {
    const {nummer , bezeichnung} = req.body;
    const konto = await createKonto(nummer, bezeichnung);
    res.status(200).send(konto);
})

app.put('/konto/nummer/:nummer/haben', async (req, res) => {
    const { haben } = req.body;
    const nummer = req.params.nummer;
    const konto = await updateKontoHaben(req.params.nummer, haben);
    res.status(200).send(konto);
})

app.put('/konto/nummer/:nummer/soll', async (req, res) => {
    const { soll } = req.body;
    const nummer = req.params.nummer;
    const konto = await updateKontoSoll(nummer, soll);
    res.status(200).send(konto);
})

app.delete('/konto/nummer/:nummer', async (req, res) => {
    const nummer = req.params.nummer;
    const konto = await deleteKonto(nummer);
    res.status(200).send(konto);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Error: Try again later.");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})