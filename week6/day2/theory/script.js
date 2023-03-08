console.log('hello world!')

let buttonsReference = document.querySelectorAll('#listControl button')
console.log(buttonsReference)
// buttonsReference è una collezione di 3 bottoni

// buttonsReference[0] <-- primo bottone, label 1
// buttonsReference[1] <-- secondo bottone, label 3
// buttonsReference[2] <-- terzo bottone, label 5

const removeActiveFromEverything = function () {
  let allListGroupItemsReference = document.querySelectorAll(
    '#buttonControlledList .list-group-item'
  )
  // rimuovo la classe active da tutti gli elementi
  // non farlo così :(
  //   allListGroupItemsReference[0].classList.remove('active')
  //   allListGroupItemsReference[1].classList.remove('active')
  //   allListGroupItemsReference[2].classList.remove('active')
  //   allListGroupItemsReference[3].classList.remove('active')
  //   allListGroupItemsReference[4].classList.remove('active')
  // fallo così :)
  for (let i = 0; i < allListGroupItemsReference.length; i++) {
    // queste istruzioni verranno ripetute 5 volte
    allListGroupItemsReference[i].classList.remove('active')
    // i è un numero che varia da 0 a 4, aumentando di 1 alla fine ogni iterazione
  }
}

const activateButton = (correctListItemIndex) => {
  // correctListItemIndex può essere 0, 2 o 4
  // rimuovo la classe active da ogni elemento per sicurezza
  removeActiveFromEverything()
  //   seleziono tutti gli elementi della lista
  let allListGroupItemsReference = document.querySelectorAll(
    '#buttonControlledList .list-group-item'
  )
  // ora allListGroupItemsReference è un array di 5 elementi
  let element = allListGroupItemsReference[correctListItemIndex]
  // element rappresenta l'elemento da "attivare"
  console.log(element)
  element.classList.add('active')
}

// aggiungo al primo bottone un comportamento al click
buttonsReference[0].addEventListener('click', () => {
  // lancio activateButton con l'indice 0 in modo da assegnarvi il primo elemento della lista
  activateButton(0)
})

buttonsReference[1].addEventListener('click', () => {
  // lancio activateButton con l'indice 2 in modo da assegnarvi il terzo elemento della lista
  activateButton(2)
})

buttonsReference[2].addEventListener('click', () => {
  // lancio activateButton con l'indice 4 in modo da assegnarvi il quinto elemento della lista
  activateButton(4)
})

// SEZIONE FORM
const formSubmission = function (e) {
  alert('invio il form!')
  // per evitare che il form aggiorni la pagina all'invio è necessario invocare un metodo
  // chiamato preventDefault() sull'evento che accompagna il submit
  e.preventDefault()
  // questa riga dovrebbe EVITARE che il browser si refreshi
  // a questo punto potete inserire la vostra logica per l'invio dei dati

  // per recuperare i valori di un form dobbiamo ottenere un riferimento al tag input
  // e leggere la proprietà "value"
  let selectInputReference = document.getElementById('option')
  console.log(selectInputReference.value)

  let emailInputReference = document.getElementById('exampleInputEmail1')
  console.log(emailInputReference.value)

  let passwordInputReference = document.getElementById('exampleInputPassword1')
  console.log(passwordInputReference.value)

  selectInputReference.value = ''
  emailInputReference.value = ''
  passwordInputReference.value = ''
}
