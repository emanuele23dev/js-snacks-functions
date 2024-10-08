/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetings (name) {
    let greet;
// recupero ora attuale e salvo in una variabile 
let ora = new Date().getHours()
console.log(ora);
// se l'ora attuale è 13 o inferiore il saluto sarà "Buongiorno"
if (ora < 13) {
   greet = 'Buongiorno'
}
else if (ora < 17) {
    greet = 'Buon pomeriggio'
}
else {
    greet = 'Buona sera'
}

return `${greet} ${name}`
// altrimenti se l'ora è inferiore o uguale alle 17 sarà "buon pomeriggio" 
// altrimenti sarà "buonasera"
}


// Invoca la funzione qui e stampa il risultato in console

console.log(greetings(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

