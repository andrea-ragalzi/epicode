# OOP

## Le CLassi

In JavaScript, le classi sono una forma di sintassi di programmazione orientata agli oggetti (OOP) che consente ai programmatori di definire oggetti e le loro proprietà. Le classi sono state introdotte in JavaScript con l'ECMAScript 6 (ES6) e, sebbene siano ancora basate sui prototipi come il resto di JavaScript, rendono la definizione di oggetti e l'organizzazione del codice più intuitiva per i programmatori abituati alla programmazione OOP di altre lingue.

Per definire una classe in JavaScript, è possibile utilizzare la parola chiave "class". Ad esempio, il seguente codice definisce una classe chiamata "Persona" con un costruttore e alcune proprietà:  


    class Persona {
    constructor(nome, età) {
        this.nome = nome;
        this.età = età;
    }

    saluta() {
        console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.età} anni.`);
    }
    }

    const persona1 = new Persona("Mario", 25);
    const persona2 = new Persona("Luigi", 30);

    persona1.saluta(); // Output: Ciao, mi chiamo Mario e ho 25 anni.
    persona2.saluta(); // Output: Ciao, mi chiamo Luigi e ho 30 anni.


In questo esempio, il costruttore della classe "Persona" accetta due parametri, "nome" e "età", e assegna questi valori alle proprietà della classe con lo stesso nome. La classe ha anche un metodo chiamato "saluta" che stampa un messaggio di saluto con il nome e l'età dell'oggetto "Persona".

Per creare un oggetto "Persona" utilizzando questa classe, è possibile utilizzare la parola chiave "new" e passare i parametri al costruttore, come nel seguente esempio:


    const persona1 = new Persona("Mario", 25);
    const persona2 = new Persona("Luigi", 30);

    persona1.saluta(); // Output: Ciao, mi chiamo Mario e ho 25 anni.
    persona2.saluta(); // Output: Ciao, mi chiamo Luigi e ho 30 anni.

## Sottoclassi

Inoltre, le classi in JavaScript possono estendere altre classi. Ad esempio, il seguente codice definisce una classe "Studente" che estende la classe "Persona" e aggiunge una proprietà "corso di studi":


    class Studente extends Persona {
    constructor(nome, età, corsoDiStudi) {
        super(nome, età);
        this.corsoDiStudi = corsoDiStudi;
    }

    studia() {
        console.log(`Sto studiando ${this.corsoDiStudi}.`);
    }
    }

In questo esempio, la classe "Studente" eredita tutte le proprietà e i metodi della classe "Persona" e ne aggiunge uno nuovo chiamato "corsoDiStudi". La parola chiave "super" viene utilizzata per richiamare il costruttore della classe padre, in modo da assegnare i valori di "nome" e "età".

## Moduli

In JavaScript, i moduli sono una forma di organizzazione del codice che consente di suddividere il codice in file separati, ognuno dei quali esporta funzionalità specifiche e/o importa funzionalità da altri moduli.

Ciò rende il codice più modulare e mantenibile, in quanto ogni modulo può concentrarsi su una specifica funzionalità o compito, e può essere utilizzato in diversi punti del codice senza dover ripetere lo stesso codice ovunque. Inoltre, i moduli consentono di evitare conflitti di nomi e di isolare il codice, in modo che non venga influenzato da altri script nella pagina web.

I moduli in JavaScript sono stati introdotti con l'ECMAScript 6 (ES6) e sono supportati dai browser moderni e dai motori JavaScript.

Ecco un esempio di come definire un modulo in JavaScript:

    // modulo.js
    export const saluta = (nome) => {
    console.log(`Ciao, ${nome}!`);
    };

    export const somma = (a, b) => {
    return a + b;
    };

In questo esempio, il modulo "modulo.js" esporta due funzioni: "saluta" e "somma". La parola chiave "export" viene utilizzata per esportare le funzioni dal modulo in modo che possano essere utilizzate da altri file.

Per utilizzare le funzioni del modulo in un altro file, è necessario importarle utilizzando la parola chiave "import". Ad esempio:

    // main.js
    import { saluta, somma } from './modulo.js';

    saluta('Mario'); // Output: Ciao, Mario!
    const risultato = somma(3, 5);
    console.log(risultato); // Output: 8

In questo esempio, il file "main.js" importa le funzioni "saluta" e "somma" dal modulo "modulo.js" utilizzando la sintassi "{ nomeFunzione }" e la parola chiave "import". Successivamente, il codice utilizza le funzioni importate per salutare l'utente e sommare due numeri.

Ci sono anche altre sintassi per l'importazione e l'esportazione dei moduli in JavaScript, come l'importazione di tutte le funzioni come un oggetto o l'esportazione predefinita di una singola funzione, ma il concetto di base è sempre lo stesso: i moduli consentono di organizzare e condividere il codice in modo modulare e mantenibile.

# Programmazione Asincrona

La programmazione asincrona in JavaScript è un modo di gestire il flusso di esecuzione del codice in cui alcune operazioni possono richiedere tempo per essere eseguite e non si sa con certezza quanto tempo ci vorrà.

Ad esempio, quando si effettua una richiesta HTTP per recuperare dei dati da un server, il tempo necessario per ricevere i dati dipende da molti fattori, come la velocità della connessione, la latenza del server e la dimensione dei dati.

In JavaScript, le operazioni asincrone sono gestite principalmente tramite le cosiddette "callback", ovvero funzioni che vengono eseguite in un momento successivo rispetto alla chiamata originale, quando l'operazione asincrona è stata completata. Ad esempio, quando si effettua una richiesta HTTP asincrona, è possibile passare una funzione di callback che verrà eseguita quando i dati saranno stati recuperati.

Ecco un esempio di come gestire le operazioni asincrone in JavaScript:

    console.log("Prima dell'operazione asincrona");

    setTimeout(() => {
    console.log("Dopo un secondo");
    }, 1000);

    console.log("Dopo l'operazione asincrona");

In questo esempio, viene utilizzata la funzione "setTimeout" per eseguire una funzione di callback dopo un secondo di attesa. Tuttavia, la chiamata alla funzione "setTimeout" non blocca il flusso di esecuzione del codice, quindi il codice successivo viene eseguito immediatamente. Di conseguenza, il risultato dell'esecuzione del codice è il seguente:

    Prima dell'operazione asincrona
    Dopo l'operazione asincrona
    Dopo un secondo

Come puoi vedere, il codice all'interno della funzione di callback viene eseguito solo dopo un secondo, ma il codice successivo viene eseguito immediatamente.

Oltre alle callback, in JavaScript ci sono altre tecniche per gestire le operazioni asincrone, come le Promise e le async/await, che sono state introdotte con ECMAScript 6. Queste tecniche rendono la gestione delle operazioni asincrone più facile e leggibile rispetto alle callback, ma il concetto di base rimane lo stesso: l'operazione asincrona viene gestita in un momento successivo rispetto alla chiamata originale.

## Promise

Le Promise sono un costrutto di programmazione introdotto in JavaScript con ECMAScript 6, che semplifica la gestione di operazioni asincrone e rende il codice più leggibile e manutenibile.

Una Promise rappresenta il risultato di un'operazione asincrona che potrebbe non essere ancora disponibile. Può assumere tre stati: "pending", "fulfilled" e "rejected". Quando una Promise viene creata, si trova nello stato "pending". Quando l'operazione asincrona viene completata con successo, la Promise passa allo stato "fulfilled" e restituisce un valore. In caso di errore, la Promise passa allo stato "rejected" e restituisce un errore.

Ecco un esempio di come utilizzare una Promise in JavaScript:

    const myPromise = new Promise((resolve, reject) => {
    // operazione asincrona
    const result = Math.random();
    if (result > 0.5) {
        resolve(result); // la Promise è stata completata con successo
    } else {
        reject(new Error("La Promise è stata rifiutata")); // la Promise è stata rifiutata
    }
    });

    myPromise
    .then(result => {
        console.log("La Promise è stata completata con successo: " + result);
    })
    .catch(error => {
        console.error("La Promise è stata rifiutata: " + error);
    });

In questo esempio, viene creata una Promise ch e restituisce un valore casuale tra 0 e 1. Se il valore è maggiore di 0,5, la Promise viene completata con successo e restituisce il valore, altrimenti viene rifiutata e restituisce un errore.

La Promise viene quindi gestita tramite il metodo "then" per gestire il caso in cui la Promise è stata completata con successo e il metodo "catch" per gestire il caso in cui la Promise è stata rifiutata.

Quando la Promise è completata con successo, il valore restituito dalla Promise viene passato come argomento alla funzione di callback del metodo "then". Quando la Promise viene rifiutata, l'errore restituito viene passato come argomento alla funzione di callback del metodo "catch".

Le Promise consentono di gestire in modo elegante e intuitivo le operazioni asincrone in JavaScript, semplificando il codice e rendendolo più leggibile e manutenibile.

## Async e Await

Le funzioni asincrone vengono dichiarate con la parola chiave "async", che consente di utilizzare la parola chiave "await" per sospendere l'esecuzione della funzione fino a quando la Promise restituita non viene completata.

Ecco un esempio di utilizzo di una funzione asincrona in JavaScript:

    async function fetchUserData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }

    fetchUserData().then(data => {
    console.log(data);
    }).catch(error => {
    console.error(error);
    });

In questo esempio, viene definita una funzione asincrona "fetchUserData()" che utilizza la parola chiave "await" per sospendere l'esecuzione della funzione fino a quando la Promise restituita dalla chiamata alla funzione "fetch()" non viene completata. La funzione "fetch()" esegue una richiesta HTTP asincrona per recuperare i dati degli utenti da un API REST e restituisce una Promise che rappresenta il risultato della richiesta.

Quando la Promise restituita dalla chiamata a "fetch()" viene completata, il valore restituito viene assegnato alla costante "response". Successivamente, la funzione "response.json()" converte il corpo della risposta HTTP in un oggetto JavaScript, restituendo una Promise che rappresenta il risultato dell'operazione di parsing.

Infine, la funzione "fetchUserData()" restituisce i dati degli utenti, che vengono quindi gestiti dal metodo "then" e dal metodo "catch". Quando i dati vengono recuperati correttamente, il metodo "then" viene chiamato con i dati come argomento. In caso di errore, il metodo "catch" viene chiamato con l'errore come argomento.

Le funzioni asincrone e la programmazione asincrona in generale sono importanti in JavaScript, poiché consentono di eseguire operazioni asincrone in modo efficiente e intuitivo, senza bloccare l'esecuzione del codice.

# Eccezioni

In JavaScript, le eccezioni sono errori che si verificano durante l'esecuzione del codice, interrompendo l'esecuzione normale del programma. Le eccezioni possono essere causate da molte cose diverse, come ad esempio la presenza di un valore non atteso, un errore di sintassi o un'operazione non consentita.

Quando si verifica un'eccezione, il motore di esecuzione di JavaScript cerca di trovare un "gestore" dell'eccezione, ovvero un blocco di codice che può gestire l'errore. Se non viene trovato alcun gestore per l'eccezione, il motore di esecuzione interrompe l'esecuzione del programma e viene visualizzato un messaggio di errore.

In JavaScript, la parola chiave "try" viene utilizzata per avvolgere il blocco di codice in cui si verifica l'eccezione, mentre la parola chiave "catch" viene utilizzata per definire il blocco di codice che gestisce l'eccezione. Il blocco "finally" può essere utilizzato per definire un blocco di codice che viene sempre eseguito, indipendentemente dal fatto che si verifichi o meno un'eccezione.

Ecco un esempio di utilizzo delle eccezioni in JavaScript:

javascript

    try {
        const result = 100 / 0;
        console.log(result);
    } catch (error) {
        console.log('Errore:', error.message);
    } finally {
        console.log('Fine programma');
    }

In questo esempio, viene eseguita un'operazione matematica non valida, ovvero la divisione per zero. Quando si verifica l'errore, viene catturato dal blocco "catch", che stampa un messaggio di errore con il messaggio dell'eccezione. Infine, il blocco "finally" viene eseguito, che stampa un messaggio che indica la fine del programma.

Inoltre, in JavaScript, ci sono diverse tipologie di eccezioni predefinite, come ad esempio TypeError, ReferenceError, RangeError e molti altri. È possibile lanciare eccezioni personalizzate utilizzando la parola chiave "throw".

Ecco un esempio di lancio di un'eccezione personalizzata in JavaScript:

    function checkAge(age) {
        if (age < 18) {
            throw new Error('L\'utente non è maggiorenne.');
    }
        console.log('L\'utente è maggiorenne.');
    }

    try {
        checkAge(15);
    } catch (error) {
        console.log('Errore:', error.message);
    } finally {
        console.log('Fine programma');
    }

In questo esempio, viene definita una funzione "checkAge" che verifica se l'età dell'utente è maggiore o uguale a 18. Se l'età è inferiore a 18, viene lanciata un'eccezione personalizzata utilizzando la parola chiave "throw". Quando si verifica l'errore, viene catturato dal blocco "catch", che stampa un messaggio di errore con il messaggio dell'eccezione. Infine, il blocco "finally" viene eseguito, che stampa un messaggio che indica la fine del programma.

# Strict Mode

Il "mode strict" (o "strict mode" in inglese) è una funzionalità di JavaScript introdotta nella versione ECMAScript 5. Questa modalità permette di eseguire il codice JavaScript in un contesto più restrittivo rispetto alla modalità predefinita, che viene chiamata "sloppy mode" o "modalità non rigorosa".

L'utilizzo del "mode strict" porta diversi vantaggi, tra cui:

Migliora la sicurezza del codice: in modalità strict, vengono introdotte alcune restrizioni sulle operazioni consentite dal codice JavaScript, ad esempio l'utilizzo di variabili non dichiarate, la modifica di proprietà di oggetti predefinite o la ridefinizione di funzioni predefinite. Queste restrizioni aiutano a evitare errori di programmazione comuni e a rendere il codice più sicuro.

Migliora la qualità del codice: grazie alle restrizioni introdotte dalla modalità strict, il codice viene scritto in modo più rigoroso e coerente, migliorando la qualità e la manutenibilità del codice stesso.

Migliora le prestazioni: in alcuni casi, l'utilizzo della modalità strict può portare a un miglioramento delle prestazioni del codice, ad esempio eliminando alcune operazioni inutili che vengono effettuate in modalità non rigorosa.

Per attivare la modalità strict in un file JavaScript, è sufficiente inserire la seguente riga all'inizio del file:

    "use strict";

In questo modo, tutte le istruzioni contenute nel file verranno eseguite in modalità strict, con le relative restrizioni e vantaggi descritti in precedenza.

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}