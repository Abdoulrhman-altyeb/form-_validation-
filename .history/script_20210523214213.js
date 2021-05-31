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
        setError(username, ' username can not be blank');
    } else {
        setSucces(username)
    }

    if (emailValue === '') {
        setError(email,' email can not be blank')
    } else if (!vaildEmail(emailValue)) {
        setError(email,'email is not valid')
    } else {
        setSucces(email)
    }

    if (passowrdValue <= 0) {
        setError(password,' password can not be blank')
    } else if (passowrdValue <= 6) {
        setError(password,'password can not be less than 6 chars')
    } else if (passowrdValue > 20) {
        setError(password, 'password can not be more than 20')
    } else {
        setSucces(password)
    }


    if (password2Value <= 0) {
        setError(password2,' password can not be blank')
    } else if (password2Value !== passowrdValue){
        setError(password2,' passwords dose not match')
    }else {
        setSucces(password2)
    }
}

const vaildEmail = (email) => {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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


