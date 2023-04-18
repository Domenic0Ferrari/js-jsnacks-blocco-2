/*
Snack 1.5:
Crea un array vuoto;
Chiedi per 6 volte all’utente di inserire un numero;
Se è dispari inseriscilo nell’array.
*/

// creare un array vuoto
let oddNumber = [];

// chiedo all'utente di inserire 6 numeri diversi
for (i=0; i<6; i++){
    let userNumber = parseInt(prompt("Inserisci un numero"))

    if (userNumber%2 == 0){
        console.log("numero pari")
    } else {
        oddNumber.push(userNumber);
    }
}

console.log(oddNumber)