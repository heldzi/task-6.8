const input = document.querySelector('input');
const par = document.querySelector('#duplicateField');
const button = document.querySelector('button')
input.addEventListener('keyup', () => {
    par.textContent = input.value;
})
button.addEventListener('click', () => {
    console.log(input.value);
    par.textContent = "";
    input.value ="";
})










