const createCard = (product) => {
    const cardRef = document.createElement('card');
    cardRef.innerHTML = `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
<img src="${product.imageUrl}" alt="Product">
<div class="card-body">
    <h4 class="card-title">${product.name}</h4>
    <p class="card-text">${product.description}</p>
    <a href="./detail.html?eventId=${product._id}" class="card-link text-warning">Modifica</a>
    <a href="./detail.html?eventId=${product._id}" class="card-link text-success">Scopri di più</a>
</div>
</div>`;
    return cardRef;
};

const getProducts = async (url, api_key) => {
    try {
        let response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${api_key}`
            }
        })
        console.log(response);
        if (response.ok) {
            let products = await response.json();
            return products;
        } else {
            console.log('Siamo riusciti a contattare il server, ma c\'è stato un problema');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};

const showProducts = (products) => {
    for (const product of products) {
        const cardRef = createCard(product);
        cardsSectionRef.appendChild(cardRef);
    }
};

URL = 'https://striveschool-api.herokuapp.com/api/product/';
API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2NzkwNDc5ODQsImV4cCI6MTY4MDI1NzU4NH0.iQD_fOv0wk1qHZ9oxO9jit-L53x8FpmQK4FeJt2OcgA';

const cardsSectionRef = document.getElementById('cardsSection');

window.onload = async () => {
    let products = await getProducts(URL, API_KEY);
    console.log(products);
    showProducts(products);
};