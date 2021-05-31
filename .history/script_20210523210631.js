const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const checkInput = (e) => {
    const usernameValue = username.value;
    console.log(usernameValue)
}

form.addEventListener('submit', checkInput);


