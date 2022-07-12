const n = document.querySelector('#link');
n.addEventListener('click', function(event){
    event.preventDefault();
    this.textContent = prompt('введите текст')
})

    

