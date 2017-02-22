// addieren zweier Werte

function addieren(wert1, wert2) {
    if (isNaN(wert1) || isNaN(wert2)) {
        alert("Not a number");
        return;
    }
    // ansonsten gib mir die addition retour
    return wert1 + wert2;
}


// subtrahieren zweier Werte

function subtrahieren(wert1, wert2) {
    if (isNaN(wert1) || isNaN(wert2)) {
        alert("Not a number");
        return;
    }
    // ansonsten gib mir die subtraktion retour
    return wert1 - wert2;
}


// multiplizieren zweier Werte

function multiplizieren(wert1, wert2) {
    if (isNaN(wert1) || isNaN(wert2)) {
        alert("Not a number");
        return;
    }
    // ansonsten gib mir die multiplikation retour
    return wert1 * wert2;
}


// berechnet Werte und gibt sie ans DOM weiter


function calculateAndAddToDom(wert1, wert2, operation) {
    var resultat;

    switch (operation) {
        case "addieren":
            resultat = addieren(wert1, wert2);
            break;

        case "subtrahieren":
            resultat = subtrahieren(wert1, wert2);
            break;

        case "multiplizieren":
            resultat = multiplizieren(wert1, wert2);
            break;

        default:
            alert("Du Pfeife - das ist gar keine Operation");
            break;
    }
 /*
    if (operation === "addieren") {
        resultat = addieren(wert1, wert2);
    } else if (operation === "subtrahieren") {
        resultat = subtrahieren(wert1, wert2);
    } else if (operation === "multiplizieren") {
        resultat = multiplizieren(wert1, wert2);
    }
*/

    if (resultat !== undefined) {
        addToDom(resultat);
        addToConsole(resultat);
        addToAlert(resultat);
    }
}
