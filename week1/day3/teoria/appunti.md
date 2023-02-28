# CSS

## Introduzione e sintassi base

CSS non ha mai eliminato niente dalla propria nascita, a differenza degli altri linguaggi.

I fogli di stile agiscono a cascata
- Le regole vengono applicate quando richiamate
- Le regole seguono delle priorita di ordine
- I file CSS vengono applicati in ordine sequenziale

**Importante e importare prima il CSS reset oppure Bootstrap a esempio**

Sintassi CSS

selettore {proprieta: valore} - sintassi case - sensitive

[Link ai selettori CSS](https://www.w3schools.com/cssref/css_selectors.php)  
  
   
Si usano i selettori HTML e Body insieme per essere sicuri che le regole vengano applicate sempre.

**Si usa il CSS inline solo come eccezione.**

Si preferisce normalizzare lo User Agent Stylesheet, piuttosto che fare un reset, altrimenti dovremmo riscrivere tutto, anche gli h1!

I nomi delle classi e degli id sono case-sensitive.

In CSS posso usare due volte lo stesso id, in JS no, JS vede lo il primo che incontra.

## Selettori combinatori

    /* SELETTORE DI FRATELLI ADIACENTI */

    h2+h3 {
        text-decoration: underline;
    }

Seleziona il primo elemento h3 che viene collocato immediatamente dopo gli elementi h2.

    /* SELETTORE DI FRATELLI ADIACENTI */

    li+li {
        color: red;
        margin-left: 10px;
     }

Se applico questa regola a una lista, solo al primo elemento della lista non viene applicata la regola.

    /* SELETTORE GENERALE DI FRATELLI */

    h2~h3 {
        text-decoration: underline;
    }

Seleziona ogni elemento h3 preceduto da un elemento h2.

## Colori ed unita di misura

### Unita di misura

- **em**  
  L'unità em consente di impostare la dimensione del carattere di un elemento rispetto alla dimensione del carattere del suo genitore. Quando la dimensione dell'elemento genitore cambia, la dimensione dell'elemento figlio cambia automaticamente.
- **rem**  
  Il rem si basa sul valore di font-size dell'elemento radice, che è l'elemento html. Se l'elemento html non ha un font-size specificato, viene utilizzato il valore predefinito del browser di 16px. Quindi qui viene considerato solo il valore della radice e non c'è alcuna relazione con un elemento genitore.

### Colori

### Testi

A schermo si usano le famiglie di caratteri NON ornati, mentre su foglio quelli ornati, questo per la leggilbilita.


## Pseudo classi




## ALTRO

### Direttive

Le direttive sono un particolare costrutto che può essere facilmente riconosciuto in quanto inizia sempre col simbolo della chiocciola (@).  
Mediante le direttive vengono compiute determinate operazioni come, ad esempio, l'import di un altro foglio di stile oppure la definizione di regole speciali per la stampa dei documenti.

_Il custom CCS deve essere l'ultimo a essere importato._

Le CDN hanno diversi vantaggi:
- Sono sempre aggiornate
- Permette il caching degli elementi impotati (ex. Bootstrap)
- Caricamento piu veloce della pagina rispetto a un pacchetto locale

Svantaggi:
- Un attacco hacker che colpisce una CDN colpisce tutti i siti



Si usa un font-size di 0.8em e line-height 1.2 nel CSS reset per essere piu elastici.