/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
console.log('ESERCIZIO 1');
let myself = 'Andrea';
console.log(myself);

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('ESERCIZIO 2');
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla'];
pets.forEach(pet => console.log(pet));

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
console.log('ESERCIZIO 3');
pets.push('bunny');
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
console.log('ESERCIZIO 4');
pets.pop();
console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('ESERCIZIO 5');
let firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
console.log('ESERCIZIO 6');
for (let pet of pets) {
    if (pet[0] === "c") {
        console.log(true);
    } else {
        console.log(false);
    }
}

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log('ESERCIZIO 7');
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

const randomLicensePlate = () => {
    let lettereTarga = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeriTarga = "0123456789";
    let numeroTarga = "";

    for (let i = 0; i < 3; i++) {
        numeroTarga += lettereTarga.charAt(Math.floor(Math.random() * lettereTarga.length));
    }

    for (let i = 0; i < 4; i++) {
        numeroTarga += numeriTarga.charAt(Math.floor(Math.random() * numeriTarga.length));
    }
    return numeroTarga;
}

cars.forEach(car => car.licensePlate = randomLicensePlate());
console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
console.log('ESERCIZIO 8');
const newCar = {
    brand: 'Toyota',
    model: 'Corolla',
    color: 'silver',
    trims: ['LE', 'XLE', 'SE'],
    licensePlate: randomLicensePlate()
}

const pushCar = (newCar) => {
    cars.push(newCar);
    return cars.length;
}

console.log(pushCar(newCar));
console.log(cars);

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
console.log('ESERCIZIO 9');
let justFirstTrims = [];
const getFirstTrims = () => {
    return cars.map(car => car.trims[0]);
}

justFirstTrims = getFirstTrims();
console.log(justFirstTrims);


/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
console.log('ESERCIZIO 10');
for (let car of cars) {
    car.color.length <= 4 ? console.log('Fizz') : console.log('Buzz')
}

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
console.log('ESERCIZIO 11');
console.log(cars.filter(car => car.trims.length > 2));

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
console.log('ESERCIZIO 12');
console.log(cars.map(car => `${car.brand} ${car.model}`));

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log('ESERCIZIO 13');
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let count = 0;
let num = numericArray[count];
console.log(num);
while (num != 32) {
    num = numericArray[count];
    console.log(num);
    count++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('ESERCIZIO 14');
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
let numbersArray = [];
for (let char of charactersArray) {
    switch (char) {
        case 'a':
            numbersArray.push(1);
            break;
        case 'b':
            numbersArray.push(2);
            break;
        case 'c':
            numbersArray.push(3);
            break;
        case 'd':
            numbersArray.push(4);
            break;
        case 'e':
            numbersArray.push(5);
            break;
        case 'f':
            numbersArray.push(6);
            break;
        case 'g':
            numbersArray.push(7);
            break;
        case 'h':
            numbersArray.push(8);
            break;
        case 'i':
            numbersArray.push(9);
            break;
        case 'l':
            numbersArray.push(10);
            break;
        case 'm':
            numbersArray.push(11);
            break;
        case 'n':
            numbersArray.push(12);
            break;
        case 'o':
            numbersArray.push(13);
            break;
        case 'p':
            numbersArray.push(14);
            break;
        case 'q':
            numbersArray.push(15);
            break;
        case 'r':
            numbersArray.push(16);
            break;
        case 's':
            numbersArray.push(17);
            break;
        case 't':
            numbersArray.push(18);
            break;
        case 'u':
            numbersArray.push(19);
            break;
        case 'v':
            numbersArray.push(20);
            break;
        case 'z':
            numbersArray.push(21);
            break;
        default:
            numbersArray.push(-1);
    }
}

console.log(numbersArray);