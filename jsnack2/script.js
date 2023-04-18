/*
Snack 2.2
Generatore di “nomi cognomi” casuali: 
Il Grande Gatsby ha una lista di nomi e una lista di cognomi
Da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// fare le due liste (nomi) e (cognomi)
// prendere un elmento a caso dalla lista uno e aggiungere un elemento a caso dalla lista due

let name = [
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

for (i=0; i < name.length; i++){
    console.log(name[i]);
}

for (i=0; i < surname.length; i++){
    console.log(surname[i]);
}

console.log(name[i] + surname[i]);

