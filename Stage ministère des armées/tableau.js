let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let dateInput = document.querySelector('#date');
let heureInput = document.querySelector('#heure');
let coorconneesInput = document.querySelector('#coordonnees');
let lieuInput = document.querySelector('#lieu');
let evenementInput = document.querySelector('#evenement');
let kiaInput = document.querySelector('#kia');
let imageInput = document.querySelector('#image');


btnAdd.addEventListener('click', () => {
    let date = dateInput.value;
    let heure = heureInput.value;
    let coordonnees = coorconneesInput.value;
    let lieu = lieuInput.value;
    let evenement = evenementInput.value;
    let kia = kiaInput.value;
    let image = imageInput.value;

    let template = `
                <tr>
                    <td>${date}</td>
                    <td>${heure}</td>
                    <td>${coordonnees}</td>
                    <td>${lieu}</td>
                    <td>${evenement}</td>
                    <td>${kia}</td>
                    <td>${image}</td>
                </tr>`;

    table.innerHTML += template;
});