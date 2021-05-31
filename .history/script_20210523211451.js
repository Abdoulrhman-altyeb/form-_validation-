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
    } else {
        setSucces(username)
    }
}


const setError = (input, message) =>{
    const parentElement = input.parentElement;
    const small = parentElement.querySelector('small');
    parentElement.classList.remove('succes')
    parentElement.classList.add('error')
    small.innerText = message;
}

const setSucces = (input) =>{
    const parentElement = input.parentElement;
    parentElement.classList.remove('error')
    parentElement.classList.add('succes')
}

form.addEventListener('submit', checkInput);


