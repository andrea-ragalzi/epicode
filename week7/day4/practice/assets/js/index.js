const createCard = (photo, id) => {
    const card = document.createElement('div');
    card.className = 'card col-md-4';
    const img = document.createElement('img');
    img.src = photo.src.medium;
    img.className = 'card-img-top';
    img.alt = photo.photographer;
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = photo.photographer;
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = photo.url;
    const cardTime = document.createElement('p');
    cardTime.className = 'card-text text-muted';
    cardTime.textContent = id;
    const button = document.createElement('button');
    button.className = 'btn btn-sm btn-outline-secondary';
    button.textContent = 'Hide';
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardTime);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}

const getPhotos = async (url) => {
    try {
        let response = await fetch(
            url, {
            headers: {
                authorization: API_KEY
            }
        })
        console.log(response);
        if (response.ok) {
            let respJson = await response.json();
            let photos = respJson.photos;
            console.log(photos);
            return photos;
        } else {
            console.log('Siamo riusciti a contattare il server, ma c\'è stato un problema');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

const replacePlaceholder = (cardRef, photo) => {
    if (!cardRef) {
        return;
    }
    let imgRef = cardRef.getElementsByTagName('svg')[0];
    if (imgRef) {
        imgRef.outerHTML = '<img/>'; 
        imgRef = cardRef.getElementsByTagName('img')[0]; 
    } else {
        imgRef = cardRef.getElementsByTagName('img')[0];
    }
    imgRef.src = photo.src.original;
    const idRef = cardRef.querySelector('.text-muted');
    idRef.textContent = photo.id;
};

const PREFIX = 'https://api.pexels.com/v1/search?query=';

const URL = [
    `${PREFIX}jedi`,
    `${PREFIX}sith`,
]

const API_KEY = 'C53pTF2bPWTvtNDpcZ86COsrFlvf2pXdUkHodXGkQgLb3jPcyYxMxzBU';

const loadImageListRef = document.getElementsByClassName('loadImages');
const buttonsRef = document.querySelectorAll('button.btn.btn-sm.btn-outline-secondary');
const cardsRef = document.getElementsByClassName('card');
const formRef = document.getElementsByTagName('form')[0];
const inputRef = document.getElementById('formValue');

Array.from(loadImageListRef).forEach(async (button, i) => {
    button.addEventListener('click', async () => {
        const photos = await getPhotos(URL[i]);
        if (photos) {
            console.log(photos);
            let j = 0;
            for (j; j < photos.length; j++) {
                replacePlaceholder(cardsRef[j], photos[j]);
            }
            /*
            for (j; j < Array.from(cardsRef).length; j++) {
                console.log(j);
                cardsRef[j].remove();
                const row = cardsRef[j].parentNode;
                if (row.childElementCount === 0) {
                    row.remove();
                }
            }
            */
        } else {
            console.error('Photos not found!');
        }
    });
});


buttonsRef.forEach(button => {
    if (button.textContent.trim() === 'Hide') {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const row = card.parentNode;
            card.remove();
            if (row.childElementCount === 0) {
                row.remove();
            }
        });
    }
});


formRef.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    console.log(event);
    const photos = await getPhotos(`${PREFIX}${inputRef.value}`); 
    if (photos) {
        console.log(photos);
        let j = 0;
        for (j; j < photos.length; j++) {
            replacePlaceholder(cardsRef[j], photos[j]);
        }
    } else {
        console.error('Photos not found!');
    }
    inputRef.value = '';
});

