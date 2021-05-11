//Selection des elements
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
var cpt = 0;

//Selection des elements qui vont etre importer dans le tableau
let dateInput = document.querySelector('#date');
let heureInput = document.querySelector('#heure');
let coorconneesInput = document.querySelector('#coordonnees');
let lieuInput = document.querySelector('#lieu');
let evenementInput = document.querySelector('#evenement');
let kiaInput = document.querySelector('#kia');
let imageInput = document.querySelector('#image');

//Selection des images pour les logos
var img1 = document.getElementById("logo1");
var img2 = document.getElementById("logo2");

//Fonction de changement de logo pour l'armee de l'air et de l'espace
function logoAir(){
    img1.src = 'images/air.png';
    img2.src = 'images/air.png';
}
//Fonction de changement de logo pour l'armee de terre
function logoTerre(){
    img1.src = 'images/terre.png';
    img2.src = 'images/terre.png';
}
//Fonction de changement de logo pour la marine nationale
function logoMer(){
    img1.src = 'images/marine.png';
    img2.src = 'images/marine.png';
}
//Fonction de changement de logo pour le ministere des armees
function logoArmee(){
    img1.src = 'images/armée.png';
    img2.src = 'images/armée.png';
}

//Cacher les boutons "Enregistrer" et "Annuler"
$(document).find('.saveBtn').hide();
$(document).find('.cancelBtn').hide();

//Debut < On rend la cellule du tableau editable > Debut
$(document).on('dblclick', '.cell', function(event)
{
    event.preventDefault();

    if($(this).attr('edit_type') == 'button')
    {
        return false;
    }

    //make div editable
    $(this).closest('div').attr('contenteditable', 'true');
    //add bg css
    $(this).addClass('bg-warning').css('padding','5px');

    $(this).focus();
})
//Fin < On rend la cellule du tableau editable > Fin

//Debut < On enregistre la modification de la cellule en cliquant autre part > Debut
$(document).on('focusout', '.cell', function(event)
{
    event.preventDefault();

    if($(this).attr('edit_type') == 'button')
    {
        return false;
    }

    $(this).closest('tr');

    $(this)
        .removeClass('bg-warning') //add bg css
        .css('padding','')

})
//Fin < On enregistre la modification de la cellule en cliquant autre part > Fin

//--->button > edit > start
$(document).on('click', '.editBtn', function(event)
{
    event.preventDefault();
    var tbl_row = $(this).closest('tr');

    var row_id = tbl_row.attr('row_id');

    tbl_row.find('.saveBtn').show();
    tbl_row.find('.cancelBtn').show();

    //hide edit button
    tbl_row.find('.editBtn').hide();

    //make the whole row editable
    tbl_row.find('.cell')
        .attr('contenteditable', 'true')
        .attr('edit_type', 'button')
        .addClass('bg-warning')
        .css('padding','3px')

    //--->add the original entry > start
    tbl_row.find('.cell').each(function(index, val)
    {
        //this will help in case user decided to click on cancel button
        $(this).attr('original_entry', $(this).html());
    });
    //--->add the original entry > end

});
//--->button > edit > end

//--->button > cancel > start
$(document).on('click', '.cancelBtn', function(event)
{
    event.preventDefault();

    var tbl_row = $(this).closest('tr');

    var row_id = tbl_row.attr('row_id');

    //hide save and cacel buttons
    tbl_row.find('.saveBtn').hide();
    tbl_row.find('.cancelBtn').hide();

    //show edit button
    tbl_row.find('.editBtn').show();

    //make the whole row editable
    tbl_row.find('.cell')
        .attr('edit_type', 'click')
        .removeClass('bg-warning')
        .css('padding','')

    tbl_row.find('.cell').each(function(index, val)
    {
        $(this).html( $(this).attr('original_entry') );
    });
});
//--->button > cancel > end

//--->save whole row entery > start
$(document).on('click', '.saveBtn', function(event)
{
    event.preventDefault();
    var tbl_row = $(this).closest('tr');

    var row_id = tbl_row.attr('row_id');


    //hide save and cacel buttons
    tbl_row.find('.saveBtn').hide();
    tbl_row.find('.cancelBtn').hide();

    //show edit button
    tbl_row.find('.editBtn').show();


    //make the whole row editable
    tbl_row.find('.cell')
        .attr('edit_type', 'click')
        .removeClass('bg-warning')
        .css('padding','')

});
//--->save whole row entery > end

function changeColor(color) {
        var table = document.getElementById('table');
        var banniere = document.getElementById('banniere');
        var ligneTitre = document.getElementById('ligneTitre');
        table.style.backgroundColor= color;
        table.style.borderBottom= '2px solid'+ color;
        table.style.opacity= '0.8';
        table.style.color= 'black';
        banniere.style.backgroundColor = color;
        ligneTitre.style.backgroundColor = color;
        ligneTitre.style.opacity = '1';

}

function changer() {
    var titre = prompt('Veuiller entrer le nom de votre entreprise...');
    if(titre.onclick()){
        document.getElementById('banniere').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }

}

function changer1() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('1').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }
}

function changer2() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('2').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }
}

function changer3() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('3').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }
}
function changer4() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('4').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }
}
function changer5() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('5').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }
}

function changer6() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('6').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }
}

function changer7() {
    var titre = prompt('Veuiller entrer le titre de la colonne...');
    if(titre.onclick()){
        document.getElementById('7').innerHTML = titre;
    }
    
    else{
       // window.alert("Vous n'avez pas changer le titre.")
    }

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

//Ajout d'une nouvelle ligne lorsqu'on clique sur le bouton "Ajouter"
document.getElementById("btnAjout").addEventListener("click", ()=> {
    cpt++;
    //Selection des valeurs entrees dans les champs
    let date = dateInput.value;
    let heure = heureInput.value;
    let coordonnees = coorconneesInput.value;
    let lieu = lieuInput.value;
    let evenement = evenementInput.value;
    let kia = kiaInput.value;
    let image = imageInput.value;

    //Creation d'un template pour les nouvelles lignes
    let template = `
                <tr id="row">
                    <td><div class="cell" edit_type="dblclick">${date}</div></td>
                    <td><div class="cell" edit_type="dblclick">${heure}</div></td>
                    <td><div class="cell" edit_type="dblclick">${coordonnees}</div></td>
                    <td><div class="cell" edit_type="dblclick">${lieu}</div></td>
                    <td><div class="cell" edit_type="dblclick">${evenement}</div></td>
                    <td><div class="cell" edit_type="dblclick">${kia}</div></td>
                    <td><div class="cell" edit_type="dblclick">${image}</div></td>
                    <td><button class="editBtn">Modifier</button> <button class="saveBtn">Enregistrer</button> <button class="cancelBtn">Annuler</button> <button class="deleteBtn">Supprimer</button></td>
                </tr>`;
    //Ajout du template au tableau
    table.innerHTML += template;

    //Notification de l'ajout d'une ligne
    alert("nouvelle ligne ajoutee au tableau");
});


//Suppression d'une ligne du tableau
function supprimerLigne(e){
    //On ne supprime pas la ligne si on clique autre part que sur le bouton
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }

    //Le bouton est la cible
    const btn = e.target;
    //Supprime la ligne en cherchant le tr le plus proche
    btn.closest("tr").remove();
    alert("la ligne a ete supprimee");

}

table.addEventListener('click', supprimerLigne);

