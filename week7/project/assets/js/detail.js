const addCard = (product) => {
    const cardRef = document.createElement('card');
    cardRef.innerHTML = `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
<img src="${product.imageUrl}" alt="Product">
<div class="card-body">
    <h4 class="card-title">${product.name}</h4>
    <p class="card-text">${product.description}</p>
    <p class="card-text">${product.price} $</p>
    <button class="btn btn-success">Compralo</button>
</div>
</div>`;
    productDetailRef.appendChild(cardRef);
};

const getProduct = async (url, api_key) => {
    try {
        let response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${api_key}`
            }
        })
        console.log(response);
        if (response.ok) {
            let product = await response.json();
            return product;
        } else {
            console.log('Siamo riusciti a contattare il server, ma c\'è stato un problema');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};

URL = 'https://striveschool-api.herokuapp.com/api/product/';
API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2NzkwNDc5ODQsImV4cCI6MTY4MDI1NzU4NH0.iQD_fOv0wk1qHZ9oxO9jit-L53x8FpmQK4FeJt2OcgA';

const productDetailRef = document.getElementById('productDetail');

window.onload = async () => {
    let eventId = new URLSearchParams(window.location.search).get('eventId')
    url = `${URL}${eventId}`
    let product = await getProduct(url, API_KEY);
    console.log(product);
    addCard(product);
};