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

// Creare una lista vuota per inserire i nomi generati

let nomiCasuali = []

// prendere elementi a caso dalla lista uno e due e sommarli

for (let i=0; i < 10; i++){
    let nomeRandom = nome[Math.floor(Math.random()*nome.length)];
    let cognomeRandom = surname[Math.floor(Math.random()*surname.length)];
    nomiCasuali.push(nomeRandom + " " + cognomeRandom);
}

// fare console per visualizzarli

console.log(nomiCasuali);



