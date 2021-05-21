Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);


//Selection des elements
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let cpt = 0;

//Selection des elements qui vont etre importer dans le tableau
let dateInput = document.querySelector('#date');
let heureInput = document.querySelector('#heure');
let coorconneesInput = document.querySelector('#coordonnees');
let lieuInput = document.querySelector('#lieu');
let evenementInput = document.querySelector('#evenement');
let kiaInput = document.querySelector('#kia');
let imageInput = document.querySelector('#image');

//Selection des images pour les logos
let img1 = document.getElementById("logo1");
let img2 = document.getElementById("logo2");

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

    //Rend la div modifiable
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

//Debut < on appuie sur le bouton pour modifier la ligne
$(document).on('click', '.editBtn', function(event)
{
    event.preventDefault();
    let tbl_row = $(this).closest('tr');

    let row_id = tbl_row.attr('row_id');

    tbl_row.find('.saveBtn').show();
    tbl_row.find('.cancelBtn').show();

    //Cache le bouton "modifier"
    tbl_row.find('.editBtn').hide();

    //Rend toute la ligne modifiable
    tbl_row.find('.cell')
        .attr('contenteditable', 'true')
        .attr('edit_type', 'button')
        .addClass('bg-warning')
        .css('padding','3px')
        

    //Ajoute la valeur entrée > début
    tbl_row.find('.cell').each(function(index, val)
    {
        //Cela aide si l'utilisateur décide de cliquer sur annuler
        $(this).attr('original_entry', $(this).html());
    });
    //Ajoute la valeur entrée > fin

});
//Fin < on appuie sur le bouton pour modifier la ligne

//Début < fonction du bouton "Annuler"
$(document).on('click', '.cancelBtn', function(event)
{
    event.preventDefault();

    let tbl_row = $(this).closest('tr');

    let row_id = tbl_row.attr('row_id');

    //Cache les boutons "Sauvegarder" et "Annuler"
    tbl_row.find('.saveBtn').hide();
    tbl_row.find('.cancelBtn').hide();

    //Montre le bouton "Modifier"
    tbl_row.find('.editBtn').show();

    //Rend toute la ligne modifiable
    tbl_row.find('.cell')
        .attr('edit_type', 'click')
        .removeClass('bg-warning')
        .css('padding','')
        .css('background-color','transparent')

    tbl_row.find('.cell').each(function(index, val)
    {
        $(this).html( $(this).attr('original_entry') );
    });
});
//Fin < fonction du bouton "Annuler"

//Début < fonction de sauvegarde de la ligne
$(document).on('click', '.saveBtn', function(event)
{
    event.preventDefault();
    let tbl_row = $(this).closest('tr');

    let row_id = tbl_row.attr('row_id');


    //Cache les boutons "Sauvegarder" et "Annuler"
    tbl_row.find('.saveBtn').hide();
    tbl_row.find('.cancelBtn').hide();

    //Montre le bouton "Modifier"
    tbl_row.find('.editBtn').show();


    //Rend toute la ligne modifiable
    tbl_row.find('.cell')
        .attr('edit_type', 'click')
        .removeClass('bg-warning')
        .css('padding','')

});
//Fin < fonction de sauvegarde de la ligne

//Change la couleur de la bannière et du tableau
function changeColor(color) {
    let table = document.getElementById('table');
    let banniere = document.getElementById('banniere');
    let ligneTitre = document.getElementById('ligneTitre');
    //let uploadButton = document.querySelectorAll('myFile');
    let menu = document.getElementById('menu');
    table.style.backgroundColor= color;
    table.style.borderBottom= '2px solid'+ color;
    table.style.opacity= '0.6';
    table.style.color= 'black';
    banniere.style.backgroundColor = color;
    ligneTitre.style.backgroundColor = color;
    $("#ligneTitre").css( 'background-color', color );
    ligneTitre.style.opacity = '1';
    menu.style.backgroundColor = color;
    //document.querySelectorAll('.file-upload__button').style.backgroundColor = color;
    $(".file-upload__button").css( 'background-color', color );
    $(".file-upload__button").css( 'border', color );
    $(".file-upload__button").css( 'opacity', "1" );
      for (let e of document.querySelectorAll("th")) {e.style.backgroundColor= color;
            e.style.opacity= "1";}
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
                    <td><div class="cell" edit_type="dblclick">${image}
                    <div class="file-upload">
                            <input class="file-upload__input" type="file" name="myFile[]" id="myFile" multiple>
                            <button class="file-upload__button" type="button">Choose File(s)</button>
                            <span class="file-upload__label"></span>
                        </div>
                        </div></td>
                    <td><button class="editBtn">Modifier</button> <button class="saveBtn">Enregistrer</button> <button class="cancelBtn">Annuler</button> <button class="deleteBtn">Supprimer</button></td>
                </tr>`;
    //Ajout du template au tableau
    table.innerHTML += template;

    //Notification de l'ajout d'une ligne
    alert("Nouvelle ligne ajoutée au tableau");
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
    if(confirm("Voulez vous supprimer la ligne ?")){
        btn.closest("tr").remove();
        alert("La ligne a été supprimée");
    
    }

    
}

table.addEventListener('click', supprimerLigne);

function sortTableByColumn(table, column, asc = true){
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr")) //selectionne chaque ligne du tableau

    // Tri des lignes
    const sortedRows = rows.sort((a, b) => { //comparaison de a et de b (lignes du tableau)
        //constante: texte de la colonne de ligne. on prend les infos de la cellule dans l'index choisi (column)
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // On retire les lignes (tr) du tableau
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // On remet les lignes qui ont ete triees
    tBody.append(...sortedRows);

    // On veut se souvenir du tri actuel du tableau (croissant ou decroissant) pour pouvoir switcher avec l'autre option
    // On selectionne les entetes du tableau (colonnes) et on enleve la classe qui a pu etre ajoutee auparavant (voir lignes ci dessous)
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    // Si on est en asc on va ajouter la classe "th-sort-asc" a l'entete du tableau
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    // Si on est en desc on va ajouter la classe "th-sort-desc" a l'entete du tableau
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    // Evenement lorsqu'on clique sur une entete
    headerCell.addEventListener("click", () => {
        // On veut que tableElement fasse reference a <table> donc on passe de <th> a <tr> a <thead> a <table> donc 3 parents
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        // La colonnes est consideree comme asc si on a la classe "th-sort-asc"
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        // Permet de permutter entre asc et desc
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});

    $(document).ready(function(){
    $("#searchBox").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//Fonction pour le menu déroulant de personnalisation
    document.querySelectorAll('.toggleBtn').forEach(button =>{
        button.addEventListener('click', () => {
            const toggleContent = button.nextElementSibling;
            button.classList.toggle('toggleBtn--active');
            if (button.classList.contains('toggleBtn--active')){
                toggleContent.style.maxHeight = toggleContent.scrollHeight + 'px';
            }
            else{
                toggleContent.style.maxHeight = 0;
            }

        });
    });

$('#run').click( function() {
    var table = $('#tableau').tableToJSON();
    alert("une nouvelle page avec le json va s'ouvrir");
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write(JSON.stringify(table));
});