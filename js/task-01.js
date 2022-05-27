const items = document.querySelectorAll('.item');
const sumOfItems = items.length;
console.log(`Number of categories: ${sumOfItems}`);

const titleItems = document.querySelectorAll('.item > ul');
titleItems.forEach(function callback(element) {
    console.log(`Category: ${element.previousElementSibling.textContent}`);
    console.log(`Elements: ${element.children.length}`);
});