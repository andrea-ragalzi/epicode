const buttonsRef = document.getElementsByTagName('button');

window.addEventListener('load', () => {
    const images = document.querySelectorAll('.fade-in-top');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, 500 * index); /* Aggiunge un ritardo graduale all'animazione di ogni immagine */
    });
});


for (let buttonRef of buttonsRef) {
    buttonRef.addEventListener('click', () => {
        buttonRef.classList.toggle('rotate');
    })
}