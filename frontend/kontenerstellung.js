const url = "http://localhost:3000/konto/";
const btn = document.getElementById("createButton");

btn.addEventListener("click", () => {
    console.log("Creating new Konto");

   const data = {
       nummer : document.getElementById("kontennummer").value,
       bezeichnung : document.getElementById("kontenbezeichnung").value,
       klasse : document.getElementById("kontenklasse").value,
   };

   const options = {
       method : "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
   };

   fetch(url, options)
       .then(response) => {
        if (!response.ok) {
            throw new Error('Response not ok: ' response.statusText);
        }
        return response.json();
    })
       .then(data => {
           console.log('Success: ',data);
       })
       .then(error => console.log('Error: ',error));
});