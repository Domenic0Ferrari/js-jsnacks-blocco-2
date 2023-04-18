/*
Snack 2.2
Generatore di “nomi cognomi” casuali: 
Il Grande Gatsby ha una lista di nomi e una lista di cognomi
Da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// fare le due liste (nomi) e (cognomi)


let nome = [
    "Antonio",
    "Gianluca",
    "Enrico",
    "Sofia",
    "Romina",
    "Barbara"
];

let surname = [
    "Rossi",
    "Bianchi",
    "Ferrari",
    "Ricci",
    "Grassi",
    "Barbati"
];

// prendere elementi a caso dalla lista uno e due e sommarli

for (i=0; i < 10; i++){
    let nomeRandom = Math.floor(Math.random()*nome.length);
    let cognomeRandom = Math.floor(Math.random()*surname.length);
    console.log(nome[nomeRandom] + surname[cognomeRandom]);
}




