/*Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero.
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)*/

//1 prendo dei numeri da 1 a 100 con for, e li mostro nella console
//2 prendere numeri multipli di 3, dare un nome
//3 prendere numeri multipli di 5, dare un nome
//4 prendere numeri multipli sia di 3 che di 5, dare un nome

console.log('JS OK')

for (let i = 1; i <= 100 ; i++){
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    }
}


