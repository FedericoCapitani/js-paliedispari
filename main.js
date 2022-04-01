/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */
const parola_utente = prompt('Inserisci una parola')
console.log(parola_utente.length)

function palindrome_check(parola_utente) {
    // salvo la lunghezza della parola in una nuova variabile
    const p_length = parola_utente.length
    // controllo le due metà della parola
    for(let i = 0; i < p_length/2; i++){
        if(parola_utente[i] !== parola_utente[p_length -1 -i]){
            return false;
        }
    }
    return true;
}

let controllo = palindrome_check(parola_utente);
if(controllo == true){
    console.log(`${parola_utente} è un palindromo`);
} else if (controllo == false){
    console.log(`${parola_utente} non è un palindromo`);
}

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// prendo l'input dell'utente
const scelta_utente = prompt('Vuoi essere pari o dispari?')
const numero_utente = parseInt(prompt('Scegli un numero tra 1 e 5'))

// calcolo numero pc e faccio la somme per stabilire chi ha vinto
const PC_number = Math.floor(Math.random() * 5) + 1;
let somma  = numero_utente + PC_number;

// controllo la scelta dell'utente per comunicare il vincitore
if(scelta_utente == 'pari'){
    if(somma % 2 == 0){
        console.log('Hai vinto')
    }else{
        console.log('Hai perso');
    }
}else if(scelta_utente == 'dispari'){
    if(somma % 2 != 0){
        console.log('Hai vinto')
    }else{
        console.log('Hai perso');
    }
}

