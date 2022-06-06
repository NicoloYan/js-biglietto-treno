// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Cgiedo all'utente il prezzo del biglietto
let userKm = prompt('Kilometri da percorrere:');

// Chiedo all'utente la sua età
let userAge = prompt('Anni passeggero:');

// Definisco il prezzo per km
const pricePerKm = 0.21;

// Definisco la logica per lo sconto
if (userAge < 18) {
    discount = ((userKm * pricePerKm) * 20 / 100);
} else if (userAge > 65) {
    discount = ((userKm * pricePerKm) * 40 / 100);
} else {
    discount = 0
}
let price = (userKm * pricePerKm) - discount

let priceFixed = price.toFixed(2)


// Stampo l'output in pagina
document.getElementById('user_message').innerHTML = 'Il costo del suo viaggio è: ' +  priceFixed + 'Euro';