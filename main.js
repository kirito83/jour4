let monBouton = document.querySelector('button');
let section = document.getElementById("bouton");

section.style.display = "none";

monBouton.onclick = function()
{
   section.style.display = "block";
   monBouton.style.display = "none";
}


let boutonRecherche = document.getElementById("recherche");

boutonRecherche.onclick = function()
{
   let element = document.getElementById("champ").value;
   document.location.href = "https://www.google.fr/#q=" + element;
}

setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
