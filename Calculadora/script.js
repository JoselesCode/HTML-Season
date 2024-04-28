const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            handleOperator(button.innerText);
        } else if (button.classList.contains('number')) {
            handleNumber(button.innerText);
        } else if (button.classList.contains('decimal')) {
            handleDecimal();
        } else if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('calculate')) {
            calculate();
        }
    });
});

function handleNumber(number) {
    display.value += number;
}

function handleOperator(operator) {
    display.value += operator;
}

function handleDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function handleOperator(operator) {
    if (operator === '←') {
        display.value = display.value.slice(0, -1); 
    } else {
        display.value += operator;
    }
}
