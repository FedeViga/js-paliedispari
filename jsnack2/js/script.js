/*
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
(ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)
ATTENZIONE:
No .reverse, .split e .join
*/

// inizializzo elementi HTML e variabili
const inputElement = document.querySelector("#input");
const submitButtonElement = document.querySelector("#submit");
const resultElement = document.querySelector("#result");
let userWord;

// funzione per controllare se una parola è palindroma
function palindrome (word) {

    // dichiaro la variabile dentro la quale voglio scrivere la parola invertita
    let reverse = "";

    // inverto word con un ciclo for
    for (let i = 0; i < word.length; i++) {
        reverse += word[word.length - 1 - i];
    }

    // se reverse è uguale a word allora word è palindroma
    if (word == reverse) {
        return "La parola " + word + " è Palindroma, infatti letta al contrario rimane " + reverse;

    // altrimenti word non è palindroma
    } else {
        return "La parola " + word + " non è Palindroma, infatti letta al contrario è " + reverse;
    }
}

// al click del bottone invoco la funzione e stampo il risultato
submitButtonElement.addEventListener('click', 
    function () {
        userWord = inputElement.value;
        resultElement.innerHTML = palindrome(userWord);
    }
)
