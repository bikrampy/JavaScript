let buttons = document.querySelectorAll('.button')
console.log(buttons);
let body = document.querySelector('body')
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id
    })
})