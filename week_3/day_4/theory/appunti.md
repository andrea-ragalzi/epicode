# DOM Traversing

## Accesso ai Nodi

In JavaScript, il Document Object Model (DOM) rappresenta strutturato un documento HTML come una struttura ad albero. Il DOM Traversing si riferisce al processo di navigazione e manipolazione dei nodi nell'albero DOM utilizzando JavaScript.

Il DOM Traversing consente di accedere e modificare i vari elementi e le loro proprietà all'interno di un documento HTML. Con il DOM Traversing, è possibile selezionare gli elementi in base alla loro relazione con altri elementi, come i loro nodi genitori, fratelli o figli.

Esistono diversi metodi che è possibile utilizzare per attraversare il DOM in JavaScript, tra cui:

`getElementById`: Questo metodo consente di recuperare un elemento tramite il suo attributo ID.

`getElementsByTagName`: Questo metodo consente di recuperare gli elementi in base al loro nome di tag.

`getElementsByClassName`: Questo metodo consente di recuperare gli elementi in base al loro nome di classe.

`querySelector`: Questo metodo consente di recuperare un elemento utilizzando un selettore CSS.

`parentNode`: Questa proprietà restituisce il nodo genitore di un elemento.

`childNodes`: Questa proprietà restituisce una raccolta di nodi figli di un elemento.

`nextSibling` e `previousSibling`: Queste proprietà restituiscono i nodi fratelli successivi e precedenti di un elemento.

`firstChild` e `lastChild`: Queste proprietà restituiscono i primi e ultimi nodi figli di un elemento.

Utilizzando questi metodi e proprietà, è possibile manipolare il contenuto e la struttura di un documento HTML utilizzando JavaScript. Ad esempio, è possibile utilizzare il DOM Traversing per aggiungere o rimuovere elementi dal documento, modificare gli attributi o il contenuto degli elementi o spostare gli elementi all'interno dell'albero DOM.

Ecco alcuni esempi di codice per utilizzare il DOM Traversing in JavaScript:

    <!-- HTML -->
    <div id="myDiv">Hello, World!</div>

    // JavaScript
    const myDiv = document.getElementById('myDiv');
    console.log(myDiv.textContent); // Output: "Hello, World!"

- getElementsByTagName:  
  
        <!-- HTML -->
        <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>

        // JavaScript
        const listItems = document.getElementsByTagName('li');
        console.log(listItems.length); // Output: 3

- getElementsByClassName:

        <!-- HTML -->
        <ul class="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>

        // JavaScript
        const myListItems = document.getElementsByClassName('myList');
        console.log(myListItems.length); // Output: 1

 - querySelector:  

        <!-- HTML -->
        <div class="container">
        <p class="text">Hello, World!</p>
        </div>

        // JavaScript
    const myText = document.querySelector('.container .text');
    console.log(myText.textContent); // Output: "Hello, World!"

- parentNode:

        <!-- HTML -->
        <div id="myDiv">
        <p>Hello, World!</p>
        </div>

        // JavaScript
        const myParagraph = document.querySelector('p');
        const myDiv = myParagraph.parentNode;
        console.log(myDiv.id); // Output: "myDiv"

- childNodes:

        <!-- HTML -->
        <div id="myDiv">
        <p>Hello, World!</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        </div>

        // JavaScript
        const myDiv = document.getElementById('myDiv');
        const children = myDiv.childNodes;
        console.log(children.length); // Output: 2 (the text node and the ul element)

## Creazione, Cancellazione ed Eliminazione

- Creazione di elementi del DOM:

    Per creare un nuovo elemento del DOM, è possibile utilizzare il metodo createElement del documento. Ad esempio, per creare un nuovo elemento di paragrafo (p), è possibile scrivere il seguente codice:

    `const myParagraph = document.createElement('p');`

    Dopo aver creato l'elemento, è possibile aggiungerlo all'albero DOM utilizzando il metodo appendChild di un elemento genitore esistente. Ad esempio, per aggiungere il paragrafo creato sopra al corpo del documento, è possibile scrivere il seguente codice:

    `document.body.appendChild(myParagraph);`

- Cancellazione di elementi del DOM:

    Per cancellare un elemento del DOM, è possibile utilizzare il metodo remove dell'elemento. Ad esempio, per rimuovere il paragrafo creato sopra, è possibile scrivere il seguente codice:

    `myParagraph.remove();`

- Modifica degli elementi del DOM:

    Per modificare gli elementi del DOM, è possibile utilizzare le proprietà e i metodi messi a disposizione dal linguaggio. Ad esempio, per modificare il testo di un elemento di paragrafo, è possibile utilizzare la proprietà textContent. Ad esempio, per modificare il testo del paragrafo creato sopra, è possibile scrivere il seguente codice:

    `myParagraph.textContent = 'Hello, World!';`

    Per modificare gli attributi di un elemento, è possibile utilizzare le proprietà dell'elemento corrispondenti. Ad esempio, per modificare l'attributo href di un elemento di collegamento (a), è possibile utilizzare la proprietà href. Ad esempio, per modificare l'URL di un link, è possibile scrivere il seguente codice:

    `const myLink = document.createElement('a');`
    `myLink.href = 'https://www.example.com';`

# BOM

BOM (Browser Object Model) è un oggetto in JavaScript che rappresenta l'interfaccia tra il browser e il documento HTML. Il BOM è costituito da oggetti predefiniti che forniscono accesso a funzionalità specifiche del browser, come la finestra del browser, la cronologia della navigazione, la barra degli strumenti del browser, ecc.

Il BOM è specifico del browser e non è standardizzato dal W3C, il che significa che gli oggetti e le proprietà disponibili possono variare da browser a browser. Tuttavia, ci sono alcuni oggetti del BOM comuni che sono supportati dalla maggior parte dei browser moderni:

 - L'oggetto `window` rappresenta la finestra del browser e fornisce accesso alle proprietà della finestra, come le dimensioni della finestra, la posizione della finestra e la cronologia della navigazione.

  - L'oggetto `document` rappresenta il documento HTML caricato nella finestra del browser e fornisce accesso a tutte le proprietà e i metodi relativi al documento.

  - L'oggetto `location` fornisce informazioni sull'URL corrente, come l'URL completo, l'host, il percorso e i parametri dell'URL.

  - L'oggetto `history` fornisce accesso alla cronologia della navigazione dell'utente e consente di navigare avanti e indietro nella cronologia.

  - L'oggetto `navigator` fornisce informazioni sul browser utilizzato, come il nome del browser, la versione del browser e il sistema operativo in uso.

  - L'oggetto `screen` fornisce informazioni sullo schermo dell'utente, come le dimensioni dello schermo e la risoluzione dello schermo.

## Popup

`alert()`, `confirm()`, e `prompt()` sono metodi predefiniti per creare finestre di dialogo che consentono di interagire con l'utente e ricevere input o feedback.

La funzione alert() mostra una finestra di dialogo con un messaggio e un pulsante "OK" per chiuderla. Può essere utilizzata per fornire all'utente un feedback immediato su un'azione compiuta, come un avviso di errore o un messaggio di conferma.

Ecco un esempio di codice che utilizza la funzione alert():

    alert("Messaggio di benvenuto!");

La funzione confirm() mostra una finestra di dialogo con un messaggio e due pulsanti "OK" e "Annulla". Può essere utilizzata per chiedere all'utente di confermare un'azione, come la cancellazione di un elemento o la modifica di un'opzione.

Ecco un esempio di codice che utilizza la funzione confirm():

    if (confirm("Sei sicuro di voler cancellare questo elemento?")) {
    // eseguire la cancellazione
    } else {
    // annullare la cancellazione
    }

La funzione prompt() mostra una finestra di dialogo con un messaggio, una casella di testo per l'input dell'utente e i pulsanti "OK" e "Annulla". Può essere utilizzata per chiedere all'utente di inserire un valore o una risposta, come un nome utente o una password.

Ecco un esempio di codice che utilizza la funzione prompt():

    var nome = prompt("Inserisci il tuo nome:");
    if (nome != null) {
    alert("Ciao " + nome + "!");
    } else {
    alert("Non hai inserito il tuo nome.");
    }

È importante notare che queste funzioni possono essere invasive e interrompere il flusso dell'applicazione. Pertanto, è importante utilizzarle con cautela e solo quando necessario per garantire un'esperienza utente fluida e intuitiva.

In generale, il BOM fornisce un insieme di funzionalità specifiche del browser che possono essere utilizzate per creare applicazioni web interattive e dinamiche. Tuttavia, poiché **il BOM non è standardizzato dal W3C**, le proprietà e i metodi supportati possono variare da browser a browser e possono essere soggetti a cambiamenti in futuro.

## Cookie

I cookie in JavaScript sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando si visita un sito web. I cookie possono essere utilizzati per salvare le preferenze dell'utente, mantenere le informazioni di accesso o fornire una personalizzazione del contenuto.

In JavaScript, è possibile creare, leggere e modificare i cookie utilizzando la proprietà document.cookie. Questa proprietà restituisce tutti i cookie associati al sito web in una stringa di testo, che può essere analizzata e manipolata per leggere o scrivere i cookie specifici.

Ecco un esempio di codice che crea un nuovo cookie con un valore di scadenza di un'ora:

    document.cookie = "preferenza=Valore; max-age=3600";

In questo esempio, il cookie "preferenza" viene creato con il valore "Valore" e un tempo di scadenza di un'ora (3600 secondi).

Per leggere i cookie, è possibile utilizzare il seguente codice:

    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)preferenza\s*\=\s*([^;]*).*$)|^.*$/, "$1");

In questo esempio, la stringa di testo restituita dalla proprietà document.cookie viene analizzata utilizzando una regex per estrarre il valore del cookie "preferenza".

Per modificare i cookie esistenti, è possibile utilizzare la stessa sintassi di creazione del cookie, specificando il nome del cookie esistente:

    document.cookie = "preferenza=Nuovo valore; max-age=3600";

In questo esempio, il valore del cookie "preferenza" viene modificato in "Nuovo valore" con lo stesso tempo di scadenza di un'ora.

È importante notare che i cookie possono essere utilizzati per raccogliere informazioni personali dell'utente e che la loro utilizzo può sollevare preoccupazioni sulla privacy. Pertanto, è necessario utilizzare i cookie con cautela e solo quando necessario, fornendo sempre agli utenti le informazioni e le opzioni di controllo necessarie per garantire la sicurezza e la privacy delle loro informazioni personali.

# Ajax

Ajax (acronimo di Asynchronous JavaScript and XML) è una tecnologia web utilizzata per creare applicazioni web interattive che consentono di aggiornare parte di una pagina web senza doverla ricaricare completamente.

In pratica, Ajax consente di effettuare richieste HTTP asincrone dal browser al server web, utilizzando JavaScript per elaborare le risposte ricevute e aggiornare dinamicamente il contenuto della pagina.

Ad esempio, un'applicazione Ajax può consentire all'utente di inserire un valore in un campo di input e di ottenere immediatamente una lista di risultati corrispondenti senza dover ricaricare l'intera pagina.

Ajax è stato introdotto per la prima volta da Jesse James Garrett nel 2005 e da allora è diventato una tecnologia web molto popolare, utilizzata in molte applicazioni web, comprese le applicazioni di social networking, le applicazioni di e-commerce e molte altre.

#### **Esempio di utilizzo**

Supponiamo che tu abbia un sito web che mostri una lista di prodotti e che tu voglia consentire agli utenti di cercare i prodotti per nome utilizzando una casella di ricerca. Senza Ajax, quando l'utente effettua una ricerca, la pagina deve essere ricaricata completamente per mostrare i risultati della ricerca. Con Ajax, invece, puoi inviare una richiesta al server web e aggiornare solo la parte della pagina che mostra i risultati della ricerca, senza dover ricaricare l'intera pagina.

Ecco come potrebbe funzionare questo processo:

- L'utente digita un termine di ricerca nella casella di ricerca e preme il pulsante "Cerca".
- JavaScript rileva l'evento "clic" del pulsante "Cerca" e invia una richiesta HTTP asincrona al server web con il termine di ricerca come parametro.
- Il server elabora la richiesta e restituisce un elenco di prodotti che corrispondono al termine di ricerca.
- JavaScript riceve la risposta dal server e utilizza le informazioni ricevute per aggiornare dinamicamente la lista dei prodotti sulla pagina, senza dover ricaricare l'intera pagina.

Grazie ad Ajax, l'utente può effettuare una ricerca e vedere i risultati in tempo reale, senza dover attendere che l'intera pagina venga ricaricata.

onreadystatechange è un evento che viene generato ogni volta che lo stato di un oggetto XMLHttpRequest cambia durante la sua elaborazione. Quando si invia una richiesta HTTP asincrona con XMLHttpRequest, si può registrare una funzione di callback per gestire l'evento onreadystatechange. In questa funzione di callback si può elaborare la risposta ricevuta dal server e aggiornare la pagina dinamicamente.

status è un codice numerico restituito dal server HTTP in risposta a una richiesta. I codici di stato più comuni includono 200 (OK), 404 (Not Found) e 500 (Internal Server Error). La verifica dello status è importante per assicurarsi che la richiesta abbia avuto successo e che i dati ricevuti dal server siano validi.

readyState è un codice numerico che rappresenta lo stato corrente di un oggetto XMLHttpRequest durante il processo di elaborazione. Ci sono 5 stati possibili:

  - 0 (UNSENT) - l'oggetto XMLHttpRequest è stato creato, ma il metodo open() non è stato ancora chiamato
  - 1 (OPENED) - il metodo open() è stato chiamato, ma il metodo send() non è ancora stato chiamato
  - 2 (HEADERS_RECEIVED) - il metodo send() è stato chiamato e le intestazioni della risposta sono state ricevute
  - 3 (LOADING) - la risposta è in fase di elaborazione; alcuni dati sono già stati ricevuti
  - 4 (DONE) - l'intera risposta è stata ricevuta e l'elaborazione è stata completata

In generale, si può utilizzare la proprietà readyState di un oggetto XMLHttpRequest per monitorare lo stato di avanzamento di una richiesta HTTP asincrona e per eseguire determinate azioni in base allo stato corrente. Ad esempio, è possibile utilizzare il valore readyState per verificare quando la risposta del server è stata ricevuta correttamente (readyState == 4) e per elaborare i dati ricevuti in base allo status della risposta (status == 200).

# JSON

JSON (JavaScript Object Notation) è un formato di dati leggero e facile da leggere e scrivere. È basato su un sottoinsieme del linguaggio JavaScript ed è utilizzato per la trasmissione di dati strutturati su una rete. JSON è diventato uno standard de facto per la trasmissione di dati tra applicazioni web e mobili.

In JSON, i dati sono rappresentati come coppie chiave-valore. Gli oggetti JSON sono delimitati da parentesi graffe {} e contengono una serie di coppie chiave-valore separate da virgole. Ad esempio:

    {
    "nome": "Mario",
    "cognome": "Rossi",
    "eta": 35,
    "indirizzo": {
        "via": "Via Roma, 1",
        "citta": "Milano",
        "cap": "20100"
        }
    }

In questo esempio, l'oggetto JSON rappresenta un individuo con un nome, un cognome, un'età e un indirizzo. L'oggetto indirizzo è a sua volta un oggetto JSON che contiene un'ulteriore serie di coppie chiave-valore.

JSON supporta anche gli array, delimitati da parentesi quadre [], che contengono un elenco di valori separati da virgole. Ad esempio:

    [  "mela",  "banana",  "arancia"]

In questo esempio, l'array JSON rappresenta un elenco di frutti.

JSON è un formato di dati molto popolare perché è facile da leggere e scrivere per gli sviluppatori, ma è anche facile da elaborare e parsare da parte delle applicazioni. La maggior parte dei linguaggi di programmazione moderni, inclusi JavaScript, Java, Python, Ruby e molti altri, forniscono librerie per la lettura e la scrittura di dati in formato JSON.

# Ecmascript

ECMAScript è lo standard su cui si basa il linguaggio di programmazione JavaScript. Il primo standard è stato pubblicato nel 1997 e, da allora, sono stati rilasciati vari aggiornamenti e nuove versioni. La specifica ECMAScript viene sviluppata dall'organizzazione ECMA International, che stabilisce gli standard per molte tecnologie di base del web.

Il linguaggio JavaScript è diventato estremamente popolare e si è evoluto notevolmente nel corso degli anni. Gli sviluppatori web utilizzano sempre più spesso nuove funzionalità, sintassi e tecniche di programmazione avanzate che vengono introdotte in ogni nuova versione di ECMAScript.

Ogni nuova versione di ECMAScript introduce nuove funzionalità, come classi, moduli, arrow function, spread operator e molto altro ancora. Queste funzionalità consentono agli sviluppatori di scrivere codice più chiaro, compatto ed efficiente. Tuttavia, non tutti i browser supportano tutte le nuove funzionalità ECMAScript, quindi spesso è necessario utilizzare transpilers come Babel per trasformare il codice ECMAScript avanzato in JavaScript più compatibile con i browser più vecchi.

## ES6

ES6 (o ECMAScript 2015) è una versione importante di JavaScript rilasciata nel 2015. Essa ha introdotto molti nuovi concetti e caratteristiche nel linguaggio, che sono stati inclusi nelle versioni successive di ECMAScript.

Le principali novità introdotte da ES6 includono:

- Le classi, che forniscono un modo per creare oggetti con metodi e proprietà.
- Il supporto per i blocchi di codice con let e const, che sono simili a var ma hanno un comportamento differente per quanto riguarda la visibilità delle variabili e la gestione degli errori.
- Le arrow function, che forniscono una sintassi più concisa per le funzioni e gestiscono automaticamente il contesto this.
- I moduli, che consentono di organizzare il codice in diversi file e di esportare e importare funzioni, oggetti e variabili da un file all'altro.
- Il rest e lo spread operator, che consentono di passare un numero variabile di argomenti a una funzione o di espandere gli elementi di un array o di un oggetto.
- Le Promise, che consentono di gestire in modo asincrono le richieste e le risposte HTTP e le chiamate API.
- Il template literal, che consente di creare stringhe con interpolazione di espressioni.

In generale, ES6 ha reso il codice JavaScript più leggibile e più facile da scrivere e mantenere. Tuttavia, non tutti i browser supportano tutte le nuove funzionalità di ES6, quindi spesso è necessario utilizzare un transpiler come Babel per convertire il codice ES6 in JavaScript più compatibile con i browser più vecchi.

#### **Rest Operator**

Il Rest Operator in JavaScript, indicato con tre punti "...", è utilizzato per definire una funzione che accetta un numero indefinito di argomenti e li raggruppa in un array. Ad esempio:

    function sommaTutto(...numeri) {
    let somma = 0;
    for (let num of numeri) {
        somma += num;
    }
    return somma;
    }

    console.log(sommaTutto(1, 2, 3, 4, 5)); // output: 15

In questo esempio, la funzione sommaTutto accetta un numero indefinito di argomenti usando il Rest Operator, indicato con ...numeri. All'interno della funzione, i valori degli argomenti vengono inseriti automaticamente in un array chiamato numeri.

La funzione itera quindi su tutti gli elementi dell'array e li somma insieme, restituendo il valore della somma. Nell'esempio, l'output sarà 15, ovvero la somma dei numeri passati come argomenti (1, 2, 3, 4 e 5).










