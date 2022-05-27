let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', () => { 
    counterValue -= 1;
    counter.textContent = counterValue;
});

    btnIncrement.addEventListener('click', () => { 
    counterValue += 1;
    counter.textContent = counterValue;
});