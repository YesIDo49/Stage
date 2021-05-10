<!--Selection des elements-->
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
var cpt = 0;

<!--Selection des elements qui vont etre importer dans le tableau-->
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

<!--Ajout d'une nouvelle ligne lorsqu'on clique sur le bouton "Ajouter"-->
document.getElementById("btnAjout").addEventListener("click", ()=> {
    cpt++;
    <!--Selection des valeurs entrees dans les champs-->
    let date = dateInput.value;
    let heure = heureInput.value;
    let coordonnees = coorconneesInput.value;
    let lieu = lieuInput.value;
    let evenement = evenementInput.value;
    let kia = kiaInput.value;
    let image = imageInput.value;

    <!--Creation d'un template pour les nouvelles lignes-->
    let template = `
                <tr id="row">
                    <td>${date}</td>
                    <td>${heure}</td>
                    <td>${coordonnees}</td>
                    <td>${lieu}</td>
                    <td>${evenement}</td>
                    <td>${kia}</td>
                    <td>${image}</td>
                    <td><button class="editBtn">Modifier</button> <button class="deleteBtn">Supprimer</button></td>
                </tr>`;
    <!--Ajout du template au tableau-->
    table.innerHTML += template;

    <!--Notification de l'ajout d'une ligne-->
    alert("nouvelle ligne ajoutee au tableau");
});


<!--Suppression d'une ligne du tableau-->
function supprimerLigne(e){
    <!--On ne supprime pas la ligne si on clique autre part que sur le bouton-->
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }

    <!--Le bouton est la cible-->
    const btn = e.target;
    <!--Supprime la ligne en cherchant le tr le plus proche-->
    btn.closest("tr").remove();
    alert("la ligne a ete supprimee");

}

table.addEventListener('click', supprimerLigne);