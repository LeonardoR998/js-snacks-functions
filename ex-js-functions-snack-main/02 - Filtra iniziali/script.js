/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterByInitial(names, letter) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
      result.push(names[i]);
    }
  }
  return result;
}

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = filterByInitial(names, "A");
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
