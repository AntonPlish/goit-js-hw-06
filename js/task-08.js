const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault(); // не перезавантажує сторінку
    // console.dir(event.currentTarget); // виведення об`єкту

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = { email, password };

    if (email === "" || password === "") {
        return window.alert("Заповніть, будь ласка, усі поля");
    } else {
        console.log(formData);
    };
    
    // const formData = new formData(event.currentTarget) // збирає всі значення усіх полів
    // console.log(formData);
    // formData.forEach((value, name) => { }); // виводить всі значення усіх полів

    form.reset();
};