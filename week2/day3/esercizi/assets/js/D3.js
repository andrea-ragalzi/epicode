/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 7;
let num2 = 4;

if (num1 > num2) {
  document.getElementById('esercizio1').innerHTML = `Il numero piu grande e ${num1}`
}
else if (num1 < num2) {
  document.getElementById('esercizio1').innerHTML = `Il numero piu grande e ${num2}`
}
else {
  document.getElementById('esercizio1').innerHTML = `I numeri sono uguali`
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 != 5) {
  document.getElementById('esercizio2').innerHTML = `Not equal`
}
else {
  document.getElementById('esercizio2').innerHTML = `Equal`
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 % 5 === 0) {
  document.getElementById('esercizio3').innerHTML = 'Divisibile per 5'
}
else {
  document.getElementById('esercizio3').innerHTML = 'Non divisibile per 5'
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 === 8 || num2 === 8) {
  document.getElementById('esercizio4').innerHTML = 'Verificato';
}
else if (num1 + num2 === 8) {
  document.getElementById('esercizio4').innerHTML = 'Verificato';
}
else if (num1 - num2 === 8) {
  document.getElementById('esercizio4').innerHTML = 'Verificato';
}
else {
  document.getElementById('esercizio4').innerHTML = 'Non verificato';
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;
const SHIPPING = 10;
if (totalShoppingCart > 50) {
  document.getElementById('esercizio5').innerHTML = `Totale da pagare: ${totalShoppingCart}`;
}
else {
  document.getElementById('esercizio5').innerHTML = `Totale da pagare: ${totalShoppingCart + SHIPPING}`;
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function apply_discount(price, discount) {
  return price - (price * discount / 100);
}

if (totalShoppingCart > 50) {
  document.getElementById('esercizio6').innerHTML = `Totale da pagare: ${apply_discount(totalShoppingCart, 20)}`;
}
else {
  document.getElementById('esercizio6').innerHTML = `Totale da pagare: ${apply_discount(totalShoppingCart, 20) + SHIPPING}`;
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pere = 1000;
let mele = 120;
let banane = 10000;
/*
SOLUZIONE ALTERNATIVA
let frutta = [pere, mele, banane];
frutta.sort();
document.getElementById('esercizio7').innerHTML = `${frutta[0]} ${frutta[1]} ${frutta[2]}`;
*/
// pere >=
if ((pere >= mele) && (pere >= banane)) {
  if (mele >= banane) {
    document.getElementById('esercizio7').innerHTML = `${pere} ${mele} ${banane}`;
  }
  else {
    document.getElementById('esercizio7').innerHTML = `${pere} ${banane} ${mele}`;
  }
}
// mele >=
else if ((mele >= pere) && (mele >= banane)) {
  if (pere >= banane) {
    document.getElementById('esercizio7').innerHTML = `${mele} ${pere} ${banane}`;
  }
  else {
    document.getElementById('esercizio7').innerHTML = `${mele} ${banane} ${pere}`;
  }
}
// banane >=
else {
  if (pere >= mele) {
    document.getElementById('esercizio7').innerHTML = `${banane} ${pere} ${mele}`;
  }
  else {
    document.getElementById('esercizio7').innerHTML = `${banane} ${mele} ${pere}`;
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let fragole = 177;
if (typeof (fragole) === 'number') {
  document.getElementById('esercizio8').innerHTML = `E un numero`;
}
else {
  document.getElementById('esercizio8').innerHTML = `Non e un numero`;
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = -2;
if (x % 2 === 0) {
  document.getElementById('esercizio9').innerHTML = `E un numero pari`;
}
else {
  document.getElementById('esercizio9').innerHTML = `E un numero dispari`;
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7;
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/* SOLUZIONE ALTERNATIVA
let val = 3;
if (val < 10) {
  if (val < 5) {
    document.getElementById('esercizio10').innerHTML = "Meno di 5";
  }
  else {
    document.getElementById('esercizio10').innerHTML = "Meno di 10";
  }
}
else {
  document.getElementById('esercizio10').innerHTML = "Uguale a 10 o maggiore";
}
*/
let val = 100;
if (val < 5) {
  document.getElementById('esercizio10').innerHTML = "Meno di 5";
}
else if (val < 10) {
  document.getElementById('esercizio10').innerHTML = "Meno di 10";
}
else {
  document.getElementById('esercizio10').innerHTML = "Uguale a 10 o maggiore";
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
document.getElementById('esercizio11').innerHTML = `${me.name} ${me.lastName} [${me.skills}] ${me.city}`;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
document.getElementById('esercizio12').innerHTML = `${me.name} ${me.lastName} [${me.skills}] ${me.city}`;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
document.getElementById('esercizio13').innerHTML = `${me.name} ${me.lastName} [${me.skills}] ${me.city}`;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = [];
a.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.getElementById('esercizio14').innerHTML = `${a}`;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
a.splice(-1, 1, 100);
document.getElementById('esercizio15').innerHTML = `${a}`;