const form = document.querySelector('.form');

form.addEventListener('submit', checkInput);

console.log(form)

const checkInput = (e) => {
    e.preventDefault();
}