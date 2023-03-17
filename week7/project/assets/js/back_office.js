const addProduct = (newProduct) => {
    const divRef = document.createElement('div');
    divRef.innerHTML = `<div class="row bg-light ms-3 border border-1 border-primary product">
    <p class="col-8 ps-3 pt-1 ps-5">${newProduct.name}</p>
    <div class="row">
        <p class="col-8 ps-4 pt-1">${newProduct.description}</p>
        <button class="col-2 bg-success" href="${URL}?productId=${newProduct._id}" type="button">Modifica</button>
        <button class="col-2 bg-danger" href="${URL}?productId=${newProduct._id}" type="button">Cancella</button>
    </div>
</div>`;
    productsListRef.appendChild(divRef);
    emptyForm();
}

const editProduct = (product) => {
    nameRef.value = product.name;
    descriptionRef.value = product.description;
    imageUrlRef.value = product.imageUrl;
    priceRef.value = product.price;
    brandRef.value = product.brand;
    submitBtnRef.textContent = 'Aggiorna Prodotto';
}

const emptyForm = () => {
    nameRef.value = '',
        descriptionRef.value = '',
        imageUrlRef.value = '',
        priceRef.value = '',
        brandRef.value = ''
}

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


const saveProduct = async (url, api_key, newProduct) => {
    try {
        console.log(newProduct._id);
        let response = await fetch(url, {
            method: newProduct._id ? 'PUT' : 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                "Authorization": `Bearer ${api_key}`,
                'Content-Type': 'application/json'
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
}

const showProducts = (products) => {
    productsListRef.innerHTML = '';
    for (const product of products) {
        addProduct(product);
    }
};

const URL_PRODUCT = 'https://striveschool-api.herokuapp.com/api/product/';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2NzkwNDc5ODQsImV4cCI6MTY4MDI1NzU4NH0.iQD_fOv0wk1qHZ9oxO9jit-L53x8FpmQK4FeJt2OcgA';


// form
const formProductRef = document.getElementById('formProduct');
const nameRef = document.getElementById("name");
const descriptionRef = document.getElementById("description");
const imageUrlRef = document.getElementById("imageUrl");
const priceRef = document.getElementById("price");
const brandRef = document.getElementById("brand");
const submitBtnRef = document.getElementById("submitBtn");

//products
const productsListRef = document.getElementById('productsList');

// buttons
const buttonsRef = document.getElementsByTagName('button');

let currProductRef = null;

window.onload = async () => {
    let products = await getProducts(URL_PRODUCT, API_KEY);
    console.log(products);
    showProducts(products);
    Array.from(buttonsRef).forEach(async buttonRef => {
        currProductRef = buttonRef.closest('.product');
        if (buttonRef.textContent.trim() === 'Cancella') {
            buttonRef.addEventListener('click', async (event) => {
                event.preventDefault();
                console.log(buttonRef);
                currProductRef = buttonRef.closest('.product');
                const href = buttonRef.getAttribute('href');
                const productId = href.split('=')[1];
                let response = await fetch(URL_PRODUCT + productId, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                })
                console.log(response)
                if (response.ok) {
                    alert('EVENTO ELIMINATO CORRETTAMENTE')
                    window.location.replace('./back_office.html')
                } else {
                    alert("PROBLEMA NELL'ELIMINAZIONE DELL'EVENTO")
                }
                currProductRef.remove();
                products = await getProducts(URL_PRODUCT, API_KEY);
                showProducts(products);
            })
        }
        if (buttonRef.textContent.trim() === 'Modifica') {
            buttonRef.addEventListener('click', async (event) => {
                console.log(buttonRef);
                currProductRef = buttonRef.closest('.product');
                console.log(currProductRef);
                const href = buttonRef.getAttribute('href');
                const productId = href.split('=')[1];
                console.log(productId);
                const productObject = products.find(p => p._id === productId);
                console.log(productObject);
                editProduct(productObject);
            })
        }
    });
};

formProductRef.addEventListener('submit', async (event) => {
    event.preventDefault();
    let newProduct = {
        "name": nameRef.value,
        "description": descriptionRef.value,
        "brand": brandRef.value,
        "imageUrl": imageUrlRef.value,
        "price": parseInt(priceRef.value)
    }
    if (submitBtnRef.textContent.trim() === 'Aggiorna Prodotto') {
        currProductRef.remove();
        submitBtnRef.textContent = 'Crea Prodotto';
    }
    addProduct(newProduct);
    saveProduct(URL_PRODUCT, API_KEY, newProduct) // PUT || POST
    products = await getProducts(URL_PRODUCT, API_KEY);
    location.reload(); 
    showProducts(products);
});

