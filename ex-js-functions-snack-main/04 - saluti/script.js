/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.
function createGreeting(personName) {
  return `Ciao ${personName}`;
}

// Invoca la funzione qui e stampa il risultato in console

const greetingMessage = createGreeting(userName);
console.log(greetingMessage);

//Risultato atteso se si passa 'Mario': // ciao Mario
