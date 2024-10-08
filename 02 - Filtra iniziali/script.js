/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nome_lettera (names, letteraA) {
  return names.filter((name) => name.startsWith(letteraA));
}

// Invoca la funzione qui e stampa il risultato in console

console.log(nome_lettera(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]



// RIFATTO IN AULA 
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function filter_string (array, char) {
  let new_arr = [];
  for (let i = 0; i < array.length; i++) {
    // crea una variabile che contenga l'elemento dell'array
    let name_element = array[i];
    // verifico se l'elemento inizi con quella lettera
    if (name_element[0] === char) {
      new_arr.push(name_element)
    }
    // e pusho nell'array
  }
     return new_arr
}

console.log(filter_string(names, 'A'));
