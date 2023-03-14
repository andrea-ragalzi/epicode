const changeTheme = () => {
    let linkThemeRef = document.getElementById('theme');
    if (linkThemeRef.getAttribute('href').includes("darkly")) {
        linkThemeRef.href = "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/zephyr/bootstrap.min.css";
    } else {
        linkThemeRef.href = "https://cdn.jsdelivr.net/npm/bootswatch@5.2.3/dist/darkly/bootstrap.min.css";
    }
}

const deleteFullName = () => {
    localStorage.setItem('name', '');
    localStorage.setItem('surname', '');
    previousFullNameRef.innerText = 'No previous Full Name';
}

const saveFullName = () => {
    let name = nameInputRef.value;
    let surname = surnameInputRef.value;
    if (!name) {
        insertNameRef.classList.remove('errorField');
        return;
    }
    if (!surname) {
        insertSurnameRef.classList.remove('errorField');
        return;
    }
    insertSurnameRef.classList.add('errorField');
    insertNameRef.classList.add('errorField');
    localStorage.setItem('name', nameInputRef.value);
    localStorage.setItem('surname', surnameInputRef.value);
    previousFullNameRef.innerText =
        `Previous Full Name: ${nameInputRef.value} ${surnameInputRef.value}`;
    nameInputRef.value = '';
    surnameInputRef.value = '';
}

// buttons
const changeThemeBtnRef = document.getElementById('changeThemeBtn');
const saveBtnRef = document.getElementById('saveBtn');
const deleteBtnRef = document.getElementById('deleteBtn');

const mainContentRef = document.getElementById('mainContent');

// input
const nameInputRef = document.getElementById('nameInput');
const surnameInputRef = document.getElementById('surnameInput');

//paragraphs
const previousFullNameRef = document.getElementById('previousFullName');
const insertNameRef = document.getElementById('insertName');
const insertSurnameRef = document.getElementById('insertSurname');

changeThemeBtnRef.addEventListener('click', (event) => {
    event.preventDefault();
    changeTheme();
});

saveBtnRef.addEventListener('click', (event) => {
    event.preventDefault();
    saveFullName();
});

deleteBtnRef.addEventListener('click', (event) => {
    event.preventDefault();
    deleteFullName();
});

let startTime = Math.floor(Date.now() / 1000);
sessionStorage.setItem('startTime', startTime);
let timerInterval = setInterval(() => {
    let currentTime = Math.floor(Date.now() / 1000);
    let elapsedTime = currentTime - startTime;
    sessionStorage.setItem('elapsedTime', elapsedTime);
}, 1000);


