const sollKontonummer = document.getElementById("sollKontonummer");
const habenKontonummer = document.getElementById("habenKontonummer");

const sollBetrag = document.getElementById("sollBetrag");
const habenBetrag = document.getElementById("habenBetrag");

let allKonten;

const url = "http://localhost:3000/konto/";

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.log(error));