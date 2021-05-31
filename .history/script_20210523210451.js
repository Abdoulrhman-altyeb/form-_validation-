const form = document.querySelector('.form');



const checkInput = (e) => {
    e.preventDefault();
    console.log(form)
}

form.addEventListener('submit', checkInput);


