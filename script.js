
//_SNACK1________________________________________________________

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// function somma(num1, num2) {
//     return num1 + num2
// }
//
// // Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// const somma = function (num1, num2) {
//     return num1 + num2
// }
//
// // Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
// const somma = (num1, num2) => {
//     return num1 + num2
// }
//
// //---------------------------------------------------------------
//
//
// //_SNACK2________________________________________________________
//
// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
//
// function quadrato(num) { return num * num } // Per i piu obsoleti: :)
//
// const quadrato = num => num * num // Codice da RockStar
//
// //---------------------------------------------------------------
//
// //_SNACK3________________________________________________________
//
// // Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
// // La funzione deve eseguire l'operazione fornita sui due numeri.
//
// function eseguiOperazione(num1, num2, operatore) {
//     return operatore(num1, num2)
// }
//
// const somma = (a, b) => (a + b)
// const sottrazione = (a, b) => (a - b)
// const divisione = (a, b) => (a / b)
// const moltiplicazione = (a, b) => (a * b)
//
// console.log(eseguiOperazione(3, 6, somma))
// console.log(eseguiOperazione(3, 6, sottrazione))
// console.log(eseguiOperazione(6, 3, divisione))
// console.log(eseguiOperazione(3, 6, moltiplicazione))

//---------------------------------------------------------------

//_SNACK4________________________________________________________

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

// function creaTimer(time) {
//     return function () {
//         setTimeout(() => { console.log("Tempo scaduto!") }, time);
//     };
// }
//
// const timer = creaTimer(3000);
// timer();
//---------------------------------------------------------------


//_SNACK5________________________________________________________

// Crea una funzione stampaOgniSecondo con setInterval. Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// function stampaOgniSecondo(messaggio) {
//     const interval = setInterval(() => { console.log(messaggio) }, 1000);
//     setTimeout(() => { clearInterval(interval) }, 10000); // Per interrompere il loop dopo 10 sec
// }
// stampaOgniSecondo("Ripeti");

//---------------------------------------------------------------

//_SNACK6________________________________________________________

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// let count = 1;
// function creaContatoreAutomatico(timeInterval) {
//
//     return function () {
//         setInterval(() => {
//             if (count <= 10) { console.log(count++) } else { clearInterval() }
//         }, timeInterval)
//     }
//
// }
//
// const conta = creaContatoreAutomatico(1000)
// conta()

//---------------------------------------------------------------

//_SNACK7________________________________________________________

// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

//
// function eseguieEFerma(messaggio, startTime, stopTime) {
//     setTimeout(() => {
//         const start = setInterval(() => {
//             console.log(messaggio)
//         }, 1000)
//
//         setTimeout(() => {
//             clearInterval(start)
//         }, stopTime)
//     }, startTime)
// }
//
// eseguieEFerma("Ciao", 2000, 10000)
//---------------------------------------------------------------

//_SNACK8_BONUS_______________________________________________________

// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// function contoAllaRovescia(numero) {
//
//
//     const start = setInterval(() => {
//         numero = numero--
//         console.log(numero--)
//         if (numero == 0) {
//             clearInterval(start)
//             console.log("Tempo scaduto!!")
//         }
//     }, 1000)
//
// }
//
// contoAllaRovescia(20)

//---------------------------------------------------------------


//_SNACK9_BONUS_______________________________________________________

//Creare una funzione che esegue una sequenza di operazioni con ritardi
//Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const somma = (num1, num2) => (num1 + num2)
const sottrazione = (num1, num2) => (num1 - num2)
const divisione = (num1, num2) => (num1 / num2)
const moltiplicazione = (num1, num2) => (num1 * num2)
const operazioni = [somma, sottrazione, divisione, moltiplicazione]

function sequenzaOperazioni(operazione, intervalTime) {

    operazione.forEach(operazione => {
        setTimeout(() => {
            console.log(operazione(15, 3))
        }, intervalTime = intervalTime + 1000)
    });

}

sequenzaOperazioni(operazioni, 1000)

//---------------------------------------------------------------

//_SNACK10_BONUS_______________________________________________________

// Creare un throttler per limitare l’esecuzione di una funzione
//Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(fn, intervalTime) {
    let puoEseguire = true;

    return function () {
        if (puoEseguire) {
            fn();
            puoEseguire = false;

            setTimeout(() => {
                puoEseguire = true;
            }, intervalTime);
        }
    };
}

const stampa = () => console.log("Funzione eseguita!");
const stampaThrottlata = creaThrottler(stampa, 2000);

//---------------------------------------------------------------




