/*
Snack 1.5:
Crea un array vuoto;
Chiedi per 6 volte all’utente di inserire un numero;
Se è dispari inseriscilo nell’array.
*/

// creare un array vuoto
let oddNumber = [];

// chiedo all'utente di inserire 6 numeri diversi
for (let i=0; i<6; i++){
    let userNumber = parseInt(prompt("Inserisci un numero"))

    if (userNumber % 2 !== 0){ //verifica se il numero è dispari
        oddNumber.push(userNumber);
    }
}

console.log(oddNumber)