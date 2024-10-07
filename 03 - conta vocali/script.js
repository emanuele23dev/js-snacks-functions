/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "ernestina";

// Dichiara la funzione qui.
function vocali(word) {
  const vow = ["a", "e", "i", "o", "u"];
  return word.split("").filter((vocali) => vow.includes(vocali)).sort();
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

