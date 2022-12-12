console.log('JS OK');

/*
// Prendere gli elementi dal DOM
// Per i multipli di 3 stampi "Frizz" al pèosto ndel numero
// Per i multipli di 5 Stampi "Buzz" al posto del numero
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FrizzBuzz" al posto del numero
*/

// Prendo gli elementi
const list = document.getElementById('number-list')

let items = '';
// Multipli 

for (let i = 1; i < 101; i++) {
    let content;

    if (i % 15 === 0) {
        content ='FizzBuzz';
    } else if (i % 5 === 0) {
        content = 'Buzz';
    } else if (i % 3 === 0) {
        content = 'Fizz';
    } else {
        content = i;
    }

    console.log(content);

}

list.innerHTML = items;