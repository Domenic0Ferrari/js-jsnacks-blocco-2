/*
Snack 2.3
Crea un array di numeri interi 
Fai la somma di tutti gli elementi che sono in posizione dispari
*/

// creare un arrey con numeri interi

const number = [
    3,
    8,
    89,
    53,
    11,
    22,
    56,
    99,
    80,
    1
]

let sum = 0; //assegnare valore 0 alla variabile somma


// sommare i dispari
for(let i = 0; i < number.length; i++){
    if (i % 2 !== 0){ //se un numero diviso 2 da resto diverso da zero, ALLORA va sommato
        sum += number[i];
    }
}

console.log(sum)