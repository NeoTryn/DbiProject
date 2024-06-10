const url = "http://localhost:3000/konto/";

fetch(url)
.then(response => response.json())
.then(data => fillTables(data))
.catch(error => console.log(error));

function fillTables(data) {
    let table_body = document.querySelector('#table-body');
    let counter = 1;
    data.forEach((konto) => {
        table_body.innerHTML += `
        <tr>
            <th scope="col">${counter}</th>
            <td>${konto.nummer}</td>
            <td>${konto.bezeichnung}</td>
            <td>${konto.klasse}</td>
            <td>${konto.soll}</td>
            <td>${konto.haben}</td>
        </tr>
        `;
        counter++;
    })
}