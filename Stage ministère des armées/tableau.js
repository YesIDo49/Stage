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
        var e = document.getElementById('table');
        var banniere = document.getElementById('banniere');
        var ligneTitre = document.getElementById('ligneTitre');
        e.style.backgroundColor= color;
        banniere.style.backgroundColor = color;
        ligneTitre.style.backgroundColor = color;
        
}

function changer() {
    var titre = prompt('Veuiller entrer le nom de votre entreprise...');
    document.getElementById('banniere').innerHTML = titre;
}

function changer1() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('1').innerHTML = titre;
}

function changer2() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('2').innerHTML = titre;
}

function changer3() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('3').innerHTML = titre;
}

function changer4() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('4').innerHTML = titre;
}

function changer5() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('5').innerHTML = titre;
}

function changer6() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('6').innerHTML = titre;
}

function changer7() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    document.getElementById('7').innerHTML = titre;
}


function revenir(){
    var e = document.getElementById('table');

        
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