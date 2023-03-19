const checkNameValue = () => {
    if (nameFormRef.value.trim()) {
        nameFormRef.classList.remove('is-invalid')
        nameFormRef.classList.add('is-valid')
    }
    else {
        nameFormRef.classList.remove('is-valid')
        nameFormRef.classList.add('is-invalid')
    }
};

const checkDescriptionValue = () => {
    if (descriptionFormRef.value.trim()) {
        descriptionFormRef.classList.remove('is-invalid')
        descriptionFormRef.classList.add('is-valid')
    }
    else {
        descriptionFormRef.classList.remove('is-valid')
        descriptionFormRef.classList.add('is-invalid')
    }
};

const checkImageUrlValue = () => {
    if (imageUrlFormRef.value.trim()) {
        imageUrlFormRef.classList.remove('is-invalid')
        imageUrlFormRef.classList.add('is-valid')
    }
    else {
        imageUrlFormRef.classList.remove('is-valid')
        imageUrlFormRef.classList.add('is-invalid')
    }
};

const checkBrandValue = () => {
    if (brandFormRef.value.trim()) {
        brandFormRef.classList.remove('is-invalid')
        brandFormRef.classList.add('is-valid')
    }
    else {
        brandFormRef.classList.remove('is-valid')
        brandFormRef.classList.add('is-invalid')
    }
};

const checkPriceValue = () => {
    priceFormRef.classList.remove('is-valid');
    priceFormRef.classList.add('is-invalid');

    const price = priceFormRef.value.trim();

    if (price) {
        if (!Number.isInteger(Number(price))) {
            priceInvalidRef.innerText = 'Price must be an integer!';
        } else {
            priceFormRef.classList.remove('is-invalid');
            priceFormRef.classList.add('is-valid');
        }
    } else {
        priceInvalidRef.innerText = 'Insert Price!';
    }
};


const checkFormValues = () => {
    let errors = [
        checkNameValue(),
        checkDescriptionValue(),
        checkImageUrlValue(),
        checkBrandValue(),
        checkPriceValue()
    ]
    return errors.every((error) => !error);
};

const fillForm = () => {
    nameFormRef.value = product.name;
    descriptionFormRef.value = product.description.trim();
    imageUrlFormRef.value = product.imageUrl;
    brandFormRef.value = product.brand;
    priceFormRef.value = product.price;
};

const saveProduct = async newProduct => {
    try {
        const url = eventId ? `${URL_PRODUCT}${eventId}` : URL_PRODUCT;
        let response = await fetch(url, {
            method: eventId ? 'PUT' : 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            return false;
        } else {
            alert('We were able to contact the server, but there was a problem');
            return true;
        }
    } catch (error) {
        alert(error);
        return true;
    }
}


const URL_PRODUCT = 'https://striveschool-api.herokuapp.com/api/product/';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2QzMGY4MWI0MjAwMTM5YjI4NzMiLCJpYXQiOjE2NzkwNDc5ODQsImV4cCI6MTY4MDI1NzU4NH0.iQD_fOv0wk1qHZ9oxO9jit-L53x8FpmQK4FeJt2OcgA';

const queryParams = new URLSearchParams(window.location.search);
const eventId = queryParams.get('eventId');
const edit = Boolean(parseInt(queryParams.get('edit')));

const product = JSON.parse(localStorage.getItem('curr_product'));

const formRef = document.getElementById('formProduct');
const nameFormRef = document.getElementById('name');
const descriptionFormRef = document.getElementById('description');
const imageUrlFormRef = document.getElementById('imageUrl');
const brandFormRef = document.getElementById('brand');
const priceFormRef = document.getElementById('price');
const priceInvalidRef = document.getElementById('priceInvalid');
const resetFormRef = document.getElementById('resetForm');
const submitBtnRef = document.getElementById('submitBtn');

formRef.addEventListener('submit', async (event) => {
    event.preventDefault();
    let isFormValid = checkFormValues();
    if (!isFormValid) {
        return;
    }
    let newProduct = {
        "name": nameFormRef.value,
        "description": descriptionFormRef.value,
        "imageUrl": imageUrlFormRef.value,
        "brand": brandFormRef.value,
        "price": parseInt(priceFormRef.value)
    }
    let errSave = await saveProduct(newProduct) // PUT || POST
    if (!errSave) {
        formRef.reset();
        window.history.back();
    }
});

resetFormRef.addEventListener(('click'), event => {
    event.preventDefault();
    formRef.reset();
});

window.onload = () => {
    formRef.reset();
    if (edit) {
        fillForm();
        submitBtnRef.innerText = 'Update Product';
    }
};


