const input = document.querySelector('input');
const divBoxes = document.getElementById('boxes');
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')

input.addEventListener('number', createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
      divBoxes.insertAdjacentHTML('afterbegin',
    `<div class="box"></div>
    `);
    const box = document.querySelector('.box');
    const boxes = document.querySelectorAll('.box');
    box.style.backgroundColor = getRandomHexColor();
    const firstElement = divBoxes.firstElementChild;
    firstElement.style.width = '30px';
    firstElement.style.height = '30px';
    boxes.forEach(function (box) {
      if (box !== firstElement) {
        const width = parseInt(box.previousElementSibling.style.width) + 10;
        const height = parseInt(box.previousElementSibling.style.height) + 10;
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
      };
    });
  };
};

btnCreate.addEventListener('click', () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener('click', () => {
  const box = document.querySelectorAll('.box');
  box.forEach(function callback(box) {
    box.remove();
  });
});