/*
Pari e Dispari
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.
*/


// inizializzo elementi Html e variabili
const evenButtonElement =  document.querySelector("#even");
const oddButtonElement =  document.querySelector("#odd");
const inputElement = document.querySelector("#input");
const submitButtonElement = document.querySelector("#submit");
const resultElement = document.querySelector("#result");
let userChioce;
let userNumber;
let computerChoice;
let computerNumber;
let sum;

// funzione che genera un numero random da 1 a 5
function randomNumber() {
    const random = Math.floor(Math.random() * 5 + 1);
    return random;
}

// funzione pari o dispari
function evenOdd(number) {
    if (number % 2 == 0) {
        return "Pari"
    } else {
        return "Dispari"
    }
}

// al click del bottone pari assegno il valore "Pari" a userchoice e "Dispari" a computerchioce
evenButtonElement.addEventListener('click',
    function() {

        userChioce = "Pari";
        computerChoice = "Dispari";
        computerNumber = randomNumber();
        evenButtonElement.classList.add("active");
        oddButtonElement.classList.remove("active");
    }
)

// al click del bottone dispari assegno il valore "Dispari" a userchoice e "Pari" a computerchioce
oddButtonElement.addEventListener('click',
    function() {

        userChioce = "Dispari";
        computerChoice =  "Pari";
        computerNumber = randomNumber();
        oddButtonElement.classList.add("active");
        evenButtonElement.classList.remove("active");
    }
)

// al click del bottone gioca calcolo la somma delle scelte dell'utente e del computer e stampo il risultato
submitButtonElement.addEventListener('click',
    function() {
        userNumber = inputElement.value;
        sum = Number(computerNumber) + Number(userNumber);
        evenOdd(sum);

        // in base all'esito stampo in pagina il risultato
        if (evenOdd(sum) == userChioce) {
            resultElement.innerHTML = `Tu hai scelto ${userChioce} e hai buttato ${userNumber}.` + "<br>" + 
            `Il Computer ha scelto ${computerChoice} e ha buttato ${computerNumber}.` +  "<br>" + 
            `${userNumber} + ${computerNumber} = ${sum}.`+ "<br>" + 
            "<strong>Hai vinto!</strong>"
        } else {
            resultElement.innerHTML = `Tu hai scelto ${userChioce} e hai buttato ${userNumber}.` + "<br>" + 
            `Il Computer ha scelto ${computerChoice} e ha buttato ${computerNumber}.` +  "<br>" + 
            `${userNumber} + ${computerNumber} = ${sum}.`+ "<br>" + 
            "<strong>Hai perso!</strong>"
        }
    }
)
