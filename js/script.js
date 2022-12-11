console.log('JS OK');

/*
// Prendere gli elementi dal DOM
// Per i multipli di 3 stampi "Frizz" al pèosto ndel numero
// Per i multipli di 5 Stampi "Buzz" al posto del numero
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FrizzBuzz" al posto del numero
*/

// Prendo gli elementi


// Multipli 

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        console.log('Frizz');
    } else {
        console.log(i);
    }
    
    if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

    if( (i % 3 == 0) && (i % 5 == 0) ) {
        console.log('FrizzBuzz')
    }

}

