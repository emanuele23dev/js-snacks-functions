/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nome_lettera (names, letteraA) {
  return names.filter((name) => name.startsWith(letteraA));
}

// Invoca la funzione qui e stampa il risultato in console

console.log(nome_lettera(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]