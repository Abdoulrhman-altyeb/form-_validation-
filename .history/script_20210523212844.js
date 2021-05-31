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

    if (passowrdValue <= 0) {
        setError(password,' password can not be blank')
    }else {
        setSucces(password)
    }

    if (emailValue === '') {
        setError(email,' email can not be blank')
    } else if (!vaildEmail(email)) {
        setError(email,'email is not valid')
    }else {
        setSucces(email)
    }

    if (password2Value <= 0) {
        setError(password2,' password can not be blank')
    } else if (password2Value !== passowrdValue){
        setError(password2,' passwords dose not match')
    }else {
        setSucces(password2)
    }
}

const vaildEmail = () => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value);
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

