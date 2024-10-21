/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const nome = "Mario";

// Dichiara la funzione qui.

function saluta(nome) {
  return `Ciao ${nome}`;
}

console.log(saluta(nome));

// Invoca la funzione qui e stampa il risultato in console
console.log(saluta(nome));

//Risultato atteso se si passa 'Mario': // ciao Mario
