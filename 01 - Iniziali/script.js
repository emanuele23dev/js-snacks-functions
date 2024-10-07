/* Scrivi una funzione che accetti un array di nomi e restituisca di nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function first_index_return(names) {
  const first_name_index = [];
  for (let i = 0; i < names.length; i++) {
    const index_names = names[i];
    first_name_index.push(index_names.charAt(0));
  }
  return first_name_index;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(first_index_return(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
