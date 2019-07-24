


let element = document.querySelector('.box')

let text = document.querySelector('#text')
let range = document.querySelector('#range')
let button = document.querySelector('#button')

text.addEventListener('input',handller)
text.addEventListener('change',handller)
// range.addEventListener('click',handller)
// button.addEventListener('click',handller)





function handller () {
	console.log(event.type, event)
	console.log(text.data)
}