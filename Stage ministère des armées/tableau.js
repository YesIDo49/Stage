let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
var cpt = 0;

let dateInput = document.querySelector('#date');
let heureInput = document.querySelector('#heure');
let coorconneesInput = document.querySelector('#coordonnees');
let lieuInput = document.querySelector('#lieu');
let evenementInput = document.querySelector('#evenement');
let kiaInput = document.querySelector('#kia');
let imageInput = document.querySelector('#image');

function changeColor(color) { 
        var e = document.getElementById('table')
        var input = document.getElementsByTagName('button')
        

        if (e.style.backgroundColor == color)
    {
        e.style.backgroundColor = 'white';
    }
    else                                     
    {
        e.style.backgroundColor= color;
    }
        
}

function revenir(){
    var e = document.getElementById('table')
        
        e.style.backgroundColor= 'purple';
}

function pair(){
        
        
    if(row%2 == 0){
        var e = document.getElementsByTagName('tr');
        e.style.color= '#009879';
        e.style.backgrounColor= '#f3f3f3';
        e.style.fontWeight= 'bold';
    }

    else{
        e.style.backgrounColor= 'grey';
    }

}
btnAdd.addEventListener('click', () => {
    cpt++;
    let date = dateInput.value;
    let heure = heureInput.value;
    let coordonnees = coorconneesInput.value;
    let lieu = lieuInput.value;
    let evenement = evenementInput.value;
    let kia = kiaInput.value;
    let image = imageInput.value;

    

    let template = `
                <tr id="row">
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