document.write('<h3>Quetsa cosa sara scritta alla fine<?h3>') // 8

document.getElementById('saluto').innerHTML = 'ciao'; // 3

window.alert('Questo e un alert'); // 1
alert(8+3); // 2

console.log('verifica console') // 4

var valore = 15; // 5
console.log(valore); // 6
console.log(valore + 3); // 7

function cancella() {
    document.write('<h1>scherzetto</h1>');
}

var numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 5;

var numeroTesto = '5';
document.getElementById('numerotesto').innerHTML = numeroTesto;
document.getElementById('concatena').innerHTML = numeroTesto + 5;

var errore = pippo;
document.getElementById('errore').innerHTML = errore;