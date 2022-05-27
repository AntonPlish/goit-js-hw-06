const rangeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeControl.addEventListener("input", () => {
    text.style.fontSize = rangeControl.value + 'px';
});