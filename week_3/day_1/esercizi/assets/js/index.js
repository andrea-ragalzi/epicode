/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 1');
var area = (l1, l2) => l1 * l2;
console.log(area(2, 5));



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 2');
var crazySum = (n1, n2) => {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    }
    return n1 + n2;
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 3');
var crazyDiff = (n) => {
    if (n > 19) {
        return Math.abs(n - 19) * 3;
    }
    return Math.abs(n - 19);
}
console.log(crazyDiff(6));
console.log(crazyDiff(20));
console.log(crazyDiff(-20));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 4');
var boundary = (n) => {
    if ((20 < n) && (20 <= 100)) {
        return true;
    }
    if (n === 400) {
        return true;
    }
    return false;
}
console.log(boundary(10));
console.log(boundary(21));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(500));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 5');
var epify = (target) => {
    if (target.startsWith('EPICODE')) {
        return target;

    }
    return `EPICODE ${target}`;
}
console.log(epify('Javascript'));
console.log(epify('EPICODE PHP'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 6');
var check3and7 = (num) => {
    if (num < 0) {
        return false;
    }
    if (num % 3 === 0) {
        return true;
    }
    if (num % 7 === 0) {
        return true;
    }
    return false;
}
console.log(check3and7(3));
console.log(check3and7(3));
console.log(check3and7(4));
console.log(check3and7(-4));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 7');
var reverseString = (target) => {
    return target.split('').reverse().join('');
}
console.log(reverseString('test'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 8');
var upperFirst = (target) => {
    let words = target.split(' ');
    let result = '';
    for (let word of words) {
        result += `${word[0].toUpperCase()}${word.substring(1)} `
    }
    result = result.slice(0, result.length - 1)
    return result;
}
console.log(upperFirst('ciao mondo e java'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 9');
var cutString = (target) => {
    return target.slice(1, target.length - 1);
}
console.log(cutString('Paperino'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 10');
var giveMeRandom = (n) => {
    let array = [];
    for (let index = 0; index < n; index++) {
        array[index] = Math.floor(Math.random() * 11);
    }
    return array;
}
console.log(giveMeRandom(5));
console.log(giveMeRandom(1));
console.log(giveMeRandom(100));

// Esercizi Extra ----------------------------------------------------------------------------------------------------------------------------------------------------

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 1');
var checkArray = (numbers) => {
    let tot = 0;
    numbers.forEach(element => {
        if (element > 5) {
            console.log(`${element} e maggiore di 5`);
            tot += element;
        }
        else {
            console.log(`${element} non e maggiore di 5`);
        }
    });
    return tot;
}
console.log(checkArray(giveMeRandom(5)));
var maxShoppingCart = () => {
    let maxValue = shoppingCart[0];
    if (shoppingCart.length == 1) {
        return maxValue;
    }
    shoppingCart.forEach(element => {
        if (maxValue.price < element.price) {
            maxValue = element;
        }
    });
    return maxValue;
}
console.log(maxShoppingCart());

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 2');
function Product(_price, _name, _id, _quantity) {
    this.price = _price;
    this.name = _name;
    this.id = _id;
    this.quantity = _quantity;
}

var shoppingCart = [
    new Product(300.00, 'desktop', 0, 1), console.log('ESERCIZIO EXTRA 4');
var maxShoppingCart = () => {
    let maxValue = shoppingCart[0];
    if (shoppingCart.length == 1) {
        return maxValue;
    }
    shoppingCart.forEach(element => {
        if (maxValue.price < element.price) {
            maxValue = element;
        }
    });
    return maxValue;
}
console.log(maxShoppingCart());
new Product(999.99, 'notebook', 1, 1),
    new Product(400.00, 'tablet', 2, 1)
]

var shoppingCartTotal = () => {
    let tot = 0;
    shoppingCart.forEach(element => {
        tot += element.price * element.quantity;
    });
    return tot;
}
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio Extra 3');
var addToShoppingCart = (newProduct) => {
    shoppingCart.push(newProduct);
    return shoppingCart.length;
}
console.log(addToShoppingCart(new Product(100.00, 'monitor', 3, 2)));
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 4');
var maxShoppingCart = () => {
    let maxValue = shoppingCart[0];
    if (shoppingCart.length == 1) {
        return maxValue;
    }
    shoppingCart.forEach(element => {
        if (maxValue.price < element.price) {
            maxValue = element;
        }
    });
    return maxValue;
}
console.log(maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 5');
var latestShoppingCart = () => {
    return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 6');
var loopUntil = (target) => {
    if ((target < 1) && (target > 8)) {
        return;
    }
    let count = 0;
    while (count < 3) {
        let randomValue = Math.floor(Math.random() * 10)
        console.log(randomValue);
        if (randomValue > target) {
            count++;
        }
        else {
            count = 0;
        }
    }
}
loopUntil(8);
console.log('End');

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 7');
var average = (values) => {
    let sum = 0;
    let len = 0;
    values.forEach(element => {
        if (typeof element === 'number') {
            sum += element;
            len++;
        }
    });
    return sum / len;
}
console.log(average([0, 1, 2, 3, 4, 'Python']));


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 8');
var longest = (words) => {
    if (words.length === 1) {
        return words[0];
    }
    let longWord = '';
    for (let word of words) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    }
    return longWord;
};
console.log(longest(['Piero', 'Ermanno', 'Paola', 'Gina', 'Isabella']));
console.log(longest([]));
console.log(longest(['Piero', 'Ermanno', 'Paola', 'Gina']));
console.log(longest(['Ezecchiele', 'Piero', 'Ermanno', 'Paola', 'Gina', 'Isabella']));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 9');
var spamFilter = (emailContent) => {
    return emailContent.includes('SPAM') || emailContent.includes('SCAM')
        ? true : false;
}
console.log(spamFilter('SPAM C++'));
console.log(spamFilter('Delphi SPAM'));
console.log(spamFilter('Go SCAM'));
console.log(spamFilter('Go'));


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 10');
var daysSinceDate = (target) => {
    let today = new Date();
    let differenceInTime = today.getTime() - target.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.floor(differenceInDays);
}
console.log(daysSinceDate(new Date('2024 02 13')));


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO EXTRA 11');
var matrixGenerator = (x, y) => {
    let result = [];
    for (let i = 0; i < y; i++) {
        result[i] = [];
        for (let j = 0; j < x; j++) {
            result[i][j] = [`${i}${j}`];
        }
    }
    return result;
}
console.log(matrixGenerator(3, 2));
