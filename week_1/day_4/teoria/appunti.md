# Il Box Model

Nasce dopo le tabelle.

Per impostazione predefinita nel modello box dei CSS, la larghezza e l'altezza assegnate a un elemento vengono applicate solo al riquadro del contenuto dell'elemento. Se l'elemento ha un bordo o un padding, questo viene aggiunto alla larghezza e all'altezza per ottenere le dimensioni del riquadro che viene visualizzato sullo schermo. Ciò significa che quando si impostano la larghezza e l'altezza, è necessario regolare il valore dato per tenere conto di eventuali bordi o padding aggiunti. Per esempio, se si hanno quattro riquadri con larghezza: 25%;, se uno di essi ha un padding a sinistra o a destra o un bordo a sinistra o a destra, per impostazione predefinita non si adatteranno a una riga all'interno dei vincoli del contenitore padre.

La proprietà **box-sizing** può essere utilizzata per regolare questo comportamento:  

- **content-box** fornisce il comportamento predefinito di ridimensionamento delle caselle CSS. Se imposti la larghezza di un elemento su 100 pixel, la casella del contenuto dell'elemento sarà larga 100 pixel e la larghezza di qualsiasi bordo o spaziatura interna verrà aggiunta alla larghezza finale di rendering, rendendo l'elemento *più largo di 100 px*.  
  
- **border-box** indica al browser di tenere conto di eventuali bordi e spaziatura interna nei valori specificati per la larghezza e l'altezza di un elemento. Se imposti la larghezza di un elemento su 100 pixel, quei 100 pixel includeranno qualsiasi bordo o spaziatura interna che hai aggiunto e la casella del contenuto si ridurrà per assorbire tale larghezza aggiuntiva. Questo in genere rende molto più facile dimensionare gli elementi. Ridimensionamento delle caselle: border-box è lo stile predefinito utilizzato dai browser per gli elementi,
e e per gli elementi il cui tipo è Radio, casella di controllo, Reimposta, pulsante, Invia, Colore o Ricerca.


La misura dei bordi solitamente si da in px.

L'opacity si applica a tutti i figli!

Si usa margin-bottom piuttosto che margin-top

    visibility: hidden; /* nasconde l'elemento alla vista */
    display: none; /* l'elemento non occupa spazio */

    a:active {code} /* funziona solo se tengo premuto il link, non si usa */



## Altro

