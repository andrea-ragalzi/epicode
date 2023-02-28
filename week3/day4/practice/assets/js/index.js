/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
*/

const changeTitle = function (newTitle) {
    document.title = newTitle;
}

changeTitle('Ora sono io il titolo!');

/* ESERCIZIO 2
 Scrivi una funzione per cambiare la classe del titolo della pagina in 'myHeading'.
*/

const addClassToTitle = function () {
    document.querySelector('h1').className = 'myHeading';
}
addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
*/

const changePcontent = function () {
    let par = document.querySelectorAll('div p');
    par.forEach(element =>
        element.textContent = `${element.textContent} updated`
    )
}
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
*/

const changeUrls = function () {
    let links = document.querySelectorAll('a');
    links.forEach(link => link.href = `https://www.google.com`
    );
}
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
*/

const addToTheSecond = function (content) {
    const secondList = document.getElementById('secondList');
    let newLi = document.createElement('li');
    newLi.textContent = content;
    secondList.appendChild(newLi);
}
addToTheSecond('li generato con JS');

/* ESERCIZIO 6
 Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
*/

const addParagraph = function (content) {
    const div = document.querySelector('div');
    let p = document.createElement('p');
    p.textContent = content;
    div.appendChild(p);
}
addParagraph('p creato con JS')

/* ESERCIZIO 7
 Scrivi una funzione per far scomparire la prima lista non-ordinata.
*/

const firstUlDisappear = function () {
    document.getElementById('firstList').remove();
}
firstUlDisappear();

/* ESERCIZIO 8
 Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
*/

const paintItGreen = function () {
    let ulist = document.querySelectorAll('ul');
    ulist.forEach(elem => elem.style = 'background-color:green;')
}
paintItGreen();

/* ESERCIZIO 9
 Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
*/

const makeItClickable = function () {
    const h1Title = document.querySelector('h1');
    h1Title.addEventListener('click', () => {
        const colors = ['red', 'blue', 'green', 'orange', 'purple'];
        h1Title.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
}
makeItClickable();

/* ESERCIZIO 10
 Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
*/

const changeFooterText = function () {
    let lock = false;
    const pFooter =
        document.getElementsByClassName('footer')[0].querySelector('p');
    pFooter.addEventListener('click', () => {
        if (lock) {
            return;
        }
        lock = true;
        const languages = ['Python', 'Java', 'Go', 'Lua', 'PHP'];
        pFooter.textContent =
            languages[Math.floor(Math.random() * languages.length)];
    });
}
changeFooterText();

/* ESERCIZIO 11
 Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
*/

const inputField = document.getElementById('input-field')
inputField.addEventListener('input', () => {
    console.log(inputField.value);
})

/* ESERCIZIO 12
 Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
*/

window.onload = function () {
    alert('Benvenuto e complimenti per aver finito gli esercizi!');
}