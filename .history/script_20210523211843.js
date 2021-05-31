const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const checkInput = (e) => {
    e.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passowrdValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (usernameValue === '') {
        setError(username, ' username can not be blank');
    } else {
        setSucces(username)
    }

    if (passowrdValue <= 0) {
        setError(password,' password can not be blank')
    }else {
        setSucces(password)
    }

    if (emailValue === '') {
        setError(email,' email can not be blank')
    // }else if ()

    if (password2Value <= 0) {
        setError(password2,' password can not be blank')
    } else if (password2Value !== passowrdValue){
        setError(password2,' passwords dose not match')
    }else {
        setSucces(password2)
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


