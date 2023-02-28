function buttonCancel() {
    display.value = '';
    enableButtons('0123456789C');
    disableButtons('+-*/=C');
}

function buttonOperator(value) {
    enableButtons('0');
    if (value === '/') {
        disableButtons('0');
    }
    disableButtons('+-*/=');
}

function buttonResult() {
    display.value = display.value.slice(0, display.value.length - 1);
    let result = eval(display.value);
    if (isNaN(result)) {
        display.value = 'Errore!';
        disableButtons('0123456789+-*/=');
    }
    else {
        display.value = result;
    }
    enableButtons('0123456789');
    disableButtons('=');
}

function calculator(event) {
    const value = event.target.value;
    const operators = '+-*/';
    display.value += value;
    if (value === 'C') {
        buttonCancel();
    }
    else if (operators.includes(value)) {
        buttonOperator(value);
    }
    else if (value === '=') {
        buttonResult();
    }
    else {
        console.log(display.value);
        enableButtons('0123456789+-*/=C');
    }
};

function disableButtons(buttons) {
    for (const button of buttons) {
        document.getElementById(button).disabled = true;
    }
}

function enableButtons(buttons) {
    for (const button of buttons) {
        document.getElementById(button).disabled = false;
    }
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('input[type="button"]');

document.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        calculator(event);
    }
});

display.value = '';
disableButtons('+-*/=C');
