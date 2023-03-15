const getCardFromJson = (book => {

    const cardRef = document.createElement('div');
    cardRef.classList.add('card');
    cardRef.style.width = '18rem';

    const imgElement = document.createElement('img');
    imgElement.classList.add('card-img-top');
    imgElement.src = book.img;
    imgElement.alt = 'Image from Film';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = book.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = `${book.price} €`;

    const buttonsBody = document.createElement('div');
    buttonsBody.classList.add('row');

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.classList.add('btn', 'btn-warning');
    deleteLink.textContent = 'Delete';
    deleteLink.onclick = deleteCard;

    const addLink = document.createElement('a');
    addLink.href = '#';
    addLink.classList.add('btn', 'btn-success');
    addLink.textContent = 'Add to Cart';
    addLink.onclick = addCardToCart;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(buttonsBody);

    cardRef.appendChild(imgElement);
    cardRef.appendChild(cardBody);

    buttonsBody.appendChild(deleteLink);
    buttonsBody.appendChild(addLink);

    return cardRef;
});

const addCardToCart = (event) => {
    event.preventDefault();
    let cart = JSON.parse(localStorage.getItem('cart'));
    const card = event.target.closest('.card');
    const cardTitle = card.querySelector('.card-title').textContent;
    if (cardTitle in cart) {
        return;
    }
    const cardPrice =
        parseFloat(card.querySelector('.card-text').textContent).toFixed(2);
    cart[cardTitle] = cardPrice;
    localStorage.setItem('cart', JSON.stringify(cart));
    let total = JSON.parse(localStorage.getItem('total'));
    total += parseFloat(cardPrice);
    localStorage.setItem('total', JSON.stringify(total));
    updateCartRef();
}

const deleteCard = (event) => {
    event.preventDefault();
    const card = event.target.closest('.card');
    card.parentNode.remove();
    updateCartRef();
}

const deleteCardFromCart = (event) => {
    event.preventDefault();
    const title = event.target.parentNode.firstChild.innerText;
    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = JSON.parse(localStorage.getItem('total'));
    total -= parseFloat(cart[title]);
    localStorage.setItem('total', JSON.stringify(total));
    delete cart[title];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartRef();
}

const updateCartRef = () => {
    ulCartRef.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = JSON.parse(localStorage.getItem('total'));
    for (let title in cart) {
        const liCartRef = document.createElement('li');
        const divCartRef = document.createElement('div');
        const titleCartRef = document.createElement('p');
        titleCartRef.textContent = title;
        const priceCartRef = document.createElement('p');
        priceCartRef.textContent = cart[title];
        const buttonCartRef = document.createElement('button');
        buttonCartRef.classList.add('btn', 'btn-danger')
        buttonCartRef.onclick = deleteCardFromCart
        buttonCartRef.innerText = 'Delete';

        divCartRef.appendChild(titleCartRef);
        divCartRef.appendChild(priceCartRef);
        divCartRef.appendChild(buttonCartRef);
        liCartRef.appendChild(divCartRef);
        ulCartRef.appendChild(liCartRef);
    }
    totalParRef.innerText = `Total: ${total}`
}

const filmsRef = document.getElementById('films');
const ulCartRef = document.getElementById('cart');
const totalParRef = document.getElementById('totalPar');

let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
}
let total = JSON.parse(localStorage.getItem('total'));
if (!total) {
    total = 0;
    localStorage.setItem('total', JSON.stringify(total));
}

updateCartRef();

fetch('https://striveschool-api.herokuapp.com/books', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((books) => {
        console.log(books);
        for (let book of books) {
            let column = document.createElement('div');
            column.classList.add('col-card')
            column.classList.add('col');
            column.appendChild(getCardFromJson(book));
            filmsRef.appendChild(column);
        }
    })
    .catch((err) => {
        console.log(err);
    })