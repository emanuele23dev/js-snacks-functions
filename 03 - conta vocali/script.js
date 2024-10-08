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




// RIFATTO IN AULA 

/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
// 1 METODO 
const words = "javascript";

function count_vowels (str) {
// crea una variabile dove scrivere le vocali 
let vowels = ['a', 'e', 'i', 'o', 'u']
let counter = 0;
for (let i = 0; i < str.lenght; i++) {
  let element = str[i];
  // verifico se il carattere selezionato è presente nell'array vocale 
  if (vowels.includes(element)) {
    counter++
  }
}
return counter
}
console.log(count_vowels(words));




// 2 METODO CON ARRAY 
const words2 = "javascript";

function count_vowels(str) {
  // crea una variabile dove scrivere le vocali
  let vowels = ["a", "e", "i", "o", "u"];
  let found_vocali = [];
  for (let i = 0; i < str.lenght; i++) {
    let carattere = str[i];
    // verifico se il carattere selezionato è presente nell'array vocale
    if (vowels.includes(carattere)) {
      found_vocali.push(carattere)
    }
  }
  return found_vocali.length()
}

console.log(count_vowels(words2));

