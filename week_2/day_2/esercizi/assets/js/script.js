const PI_GREGO = 3.14;
var nome = 'Aldo';
let ruolo = 'cliente';

// concatena1
document.getElementById('concatena').innerHTML = nome +
    ', ' + ruolo + ', ' + PI_GREGO;

// concatena2
let concatena = nome + ', ' + ruolo + ', ' + PI_GREGO;
document.getElementById('concatena2').innerHTML = concatena;

var mario = 'Mario';
let carla = 'Carla';

// mario, carla, mario
document.getElementById('var').innerHTML = mario;
document.getElementById('let').innerHTML = carla;
document.getElementById('final').innerHTML = mario;

// mario, carla, carla
document.getElementById('let2').innerHTML = mario;
mario = 'Carla';
document.getElementById('let3').innerHTML = mario;
document.getElementById('final2').innerHTML = mario;

let iniziale = 15;
let value;

// valore iniziale
document.getElementById('iniziale').innerHTML += iniziale;

// addizione e incremento
value = iniziale + 15;
document.getElementById('valore1').innerHTML =
    document.getElementById('valore1').innerHTML + value + ', ' + ++value;

// sottrazione e decremento
value = iniziale - 10;
document.getElementById('valore2').innerHTML =
    document.getElementById('valore2').innerHTML + value + ', ' + --value;

// moltiplicazione
value = iniziale * 3;
document.getElementById('valore3').innerHTML += value;

// divisione
value = iniziale / 3;
document.getElementById('valore4').innerHTML += value;

// concatenazione
let isNum = (typeof iniziale === 'number') ? 'e un numero' : 'non e un numero';
if (isNum) {
    value = iniziale + ' e un numero';
}
else {
    value = iniziale + ' non e un numero';
}
document.getElementById('valore5').innerHTML += value;