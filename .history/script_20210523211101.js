const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const checkInput = (e) => {
    e.preventDefault();
    const usernameValue = username.value;
    const emailValue = email.value;
    const passowrdValue = password.value;
    const password2Value = password2.value;
    if (usernameValue === '') {
        setError(username,'the username can not be blank');
    }
}


const setError = (input, message) =>{
    console.log()
    const parentElement = input.parentElement
}

form.addEventListener('submit', checkInput);


