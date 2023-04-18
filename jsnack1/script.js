/*
Snack 1.5:
Crea un array vuoto;
Chiedi per 6 volte all’utente di inserire un numero;
Se è dispari inseriscilo nell’array.
*/

// creare un array vuoto
let oddNumber = [];

// chiedo all'utente di inserire 6 numeri diversi
let userNumberOne = parseInt(prompt("Inserisci il primo numero"));

// verifico se il numero è pari o dispari con %2

if(userNumberOne%2 == 0){
    console.log("vuoto"); //se è pari non aggiungo all'array
} else {
    oddNumber.push(userNumberOne); //se è dispari aggiungo all'array
}
console.log(oddNumber);

// ripeto il tutto sei volte
// due

let userNumberTwo = parseInt(prompt("Inserisci il secondo numero"));
if(userNumberTwo%2 == 0){
    console.log("vuoto"); //se è pari non aggiungo all'array
} else {
    oddNumber.push(userNumberTwo); //se è dispari aggiungo all'array
}
console.log(oddNumber);

// tre

let userNumberThree = parseInt(prompt("Inserisci il terzo numero"));
if(userNumberThree%2 == 0){
    console.log("vuoto"); //se è pari non aggiungo all'array
} else {
    oddNumber.push(userNumberThree); //se è dispari aggiungo all'array
}
console.log(oddNumber);

// quattro

let userNumberFour = parseInt(prompt("Inserisci il quartonumero"));
if(userNumberFour%2 == 0){
    console.log("vuoto"); //se è pari non aggiungo all'array
} else {
    oddNumber.push(userNumberFour); //se è dispari aggiungo all'array
}
console.log(oddNumber);

// cinque

let userNumberFive = parseInt(prompt("Inserisci il quinto numero"));
if(userNumberFive%2 == 0){
    console.log("vuoto"); //se è pari non aggiungo all'array
} else {
    oddNumber.push(userNumberFive); //se è dispari aggiungo all'array
}
console.log(oddNumber);

// sei

let userNumberSix = parseInt(prompt("Inserisci il sesto numero"));
if(userNumberSix%2 == 0){
    console.log("vuoto"); //se è pari non aggiungo all'array
} else {
    oddNumber.push(userNumberSix); //se è dispari aggiungo all'array
}
console.log(oddNumber);
