const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click' , () => {
    alert('Служит для вывода информации в консоль');
})

const alertcommand = document.querySelector('#alert');

alertcommand.addEventListener('click' , () => {
    alert('Создание всплывающего окна');
})

const promptcommand = document.querySelector('#prompt');

promptcommand.addEventListener('click' , () => {
    alert('окно с текстом, полем для ввода текста и кнопками OK/Отмена');
})