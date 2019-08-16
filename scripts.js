

//LIBRO
document.getElementById("book").onmouseover = function ()
{
    document.getElementById("book").style.opacity = 0;
    document.getElementById("bookup").style.opacity = 1;
}

document.getElementById("book").onmouseout = function () {
    document.getElementById("book").style.opacity = 1;
    document.getElementById("bookup").style.opacity = 0;
}

document.getElementById("book").onclick = function () {
    document.getElementById("foro").style.opacity = 1;
    document.getElementById("foro").style.left = "0px";
    document.getElementById("foro").style.top = "0px";

    document.getElementById("foro").style.zIndex = "100";
    document.getElementById("book").style.zIndex = "101";
    document.getElementById("intro").style.zIndex = "99";
    document.getElementById("dadi").style.zIndex = "99";
    document.getElementById("pad").style.zIndex = "99";
    document.getElementById("pg").style.zIndex = "99";

    changeRiga(1, "Glossario", function () { window.location.href = 'http://www.serebii.net' });
    changeRiga(2, "Il Territorio", function () { });
    changeRiga(3, "I Clan", function () { });
    changeRiga(4, "Le Congreghe", function () { });
    changeRiga(5, "Psicologia Non-Morta", function () { });
    changeRiga(6, "Le Molte Maschere", function () { });
}


//INTRO
document.getElementById("intro").onmouseover = function () {
    document.getElementById("intro").style.opacity = 0;
    document.getElementById("introup").style.opacity = 1;
}

document.getElementById("intro").onmouseout = function () {
    document.getElementById("intro").style.opacity = 1;
    document.getElementById("introup").style.opacity = 0;
}

document.getElementById("intro").onclick = function () {
    document.getElementById("foro").style.opacity = 1;
    document.getElementById("foro").style.left = "175px";
    document.getElementById("foro").style.top = "0px";

    document.getElementById("foro").style.zIndex = "100";
    document.getElementById("book").style.zIndex = "99";
    document.getElementById("intro").style.zIndex = "101";
    document.getElementById("dadi").style.zIndex = "99";
    document.getElementById("pad").style.zIndex = "99";
    document.getElementById("pg").style.zIndex = "99";

    changeRiga(1, "Guida a Mondo di Tenebra", function () { });
    changeRiga(2, "Guida a Vampiri", function () { });
    changeRiga(3, "Guida alle Live", function () { });
    changeRiga(4, "Domande Frequenti", function () { });
    changeRiga(5, "Changelog", function () { });
    changeRiga(6, "", function () { });
}


//DADI
document.getElementById("dadi").onmouseover = function () {
    document.getElementById("dadi").style.opacity = 0;
    document.getElementById("dadiup").style.opacity = 1;
}

document.getElementById("dadi").onmouseout = function () {
    document.getElementById("dadi").style.opacity = 1;
    document.getElementById("dadiup").style.opacity = 0;
}

document.getElementById("dadi").onclick = function () {
    document.getElementById("foro").style.opacity = 1;
    document.getElementById("foro").style.left = "0px";
    document.getElementById("foro").style.top = "180px";

    document.getElementById("foro").style.zIndex = "100";
    document.getElementById("book").style.zIndex = "99";
    document.getElementById("intro").style.zIndex = "99";
    document.getElementById("dadi").style.zIndex = "101";
    document.getElementById("pad").style.zIndex = "99";
    document.getElementById("pg").style.zIndex = "99";

    changeRiga(1, "Regole per Partecipare", function () { });
    changeRiga(2, "La Scheda del Personaggio", function () { });
    changeRiga(3, "Regolamento Tecnico", function () { });
    changeRiga(4, "Combattimenti e Nutrimento", function () { });
    changeRiga(5, "Uso delle Discipline", function () { });
    changeRiga(6, "Possedimenti e Contatti", function () { });
}


//PAD
document.getElementById("pad").onmouseover = function () {
    document.getElementById("pad").style.opacity = 0;
    document.getElementById("padup").style.opacity = 1;
}

document.getElementById("pad").onmouseout = function () {
    document.getElementById("pad").style.opacity = 1;
    document.getElementById("padup").style.opacity = 0;
}

document.getElementById("pad").onclick = function () {
    document.getElementById("foro").style.opacity = 1;
    document.getElementById("foro").style.left = "175px";
    document.getElementById("foro").style.top = "180px";

    document.getElementById("foro").style.zIndex = "100";
    document.getElementById("book").style.zIndex = "99";
    document.getElementById("intro").style.zIndex = "99";
    document.getElementById("dadi").style.zIndex = "99";
    document.getElementById("pad").style.zIndex = "101";
    document.getElementById("pg").style.zIndex = "99";

    changeRiga(1, "Creazione del Personaggio", function () { });
    changeRiga(2, "Eventi", function () { });
    changeRiga(3, "I Fratelli di Tifernum", function () { });
    changeRiga(4, "Mappa del Dominio", function () { });
    changeRiga(5, "Comunicazioni In-Game", function () { });
    changeRiga(6, "Comunicazioni Off-Game", function () { });
}


//PG
document.getElementById("pg").onmouseover = function () {
    document.getElementById("pg").style.opacity = 0;
    document.getElementById("pgup").style.opacity = 1;
}

document.getElementById("pg").onmouseout = function () {
    document.getElementById("pg").style.opacity = 1;
    document.getElementById("pgup").style.opacity = 0;
}

document.getElementById("pg").onclick = function () {
    document.getElementById("foro").style.opacity = 1;
    document.getElementById("foro").style.left = "75px";
    document.getElementById("foro").style.top = "370px";

    document.getElementById("foro").style.zIndex = "100";
    document.getElementById("book").style.zIndex = "99";
    document.getElementById("intro").style.zIndex = "99";
    document.getElementById("dadi").style.zIndex = "99";
    document.getElementById("pad").style.zIndex = "99";
    document.getElementById("pg").style.zIndex = "101";

    //LOGIN CHECKS

    var user = firebase.auth().currentUser;
    if (user) {

        changeRiga(1, "", function () { });
        changeRiga(2, user.email, function () { alert("Logged in as " + user.email); });
        changeRiga(3, "Accedi all'Area Privata", function () {
            window.location = "Character Sheet.html";
        });
        changeRiga(4, "Logout", function () {
            firebase.auth().signOut().then(function () {
                alert("Uscito con successo");
                document.getElementById("pg").click();
            }, function (error) {
                alert(error.message);
            });
        });
        changeRiga(5, "Cambia Password", function () {
            firebase.auth().sendPasswordResetEmail(user.email).then(function () {
                alert("E' stata inviata una mail a " + user.email);
            }, function (error) {
                alert(error.message);
            });
        });
        changeRiga(6, "", function () { });
    }
    else {

        changeRiga(1,"", function () { });
        changeRiga(2,"", function () { });
        changeRiga(3,"Login", function () {
            document.getElementById('id01').style.display = 'block';
        });
        changeRiga(4, "", function () {

       });
        changeRiga(5, "", function () { });
        changeRiga(6, "", function () { });
    }
}

//RIGHE
var neverclicked = true;
function changeRiga(num, title, oncl) {
    document.getElementById("riga" + num).innerHTML = title;
    document.getElementById("riga" + num).onclick = oncl;
    neverclicked = false;
}

//MODAL

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    
