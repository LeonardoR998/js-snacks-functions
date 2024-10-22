/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

// Invoca la funzione qui e stampa il risultato in console

const vowelCount = countVowels(exampleString);
console.log(vowelCount);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
