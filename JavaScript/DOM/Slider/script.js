

let button_next = document.querySelector('#galery .buttons .next')
let button_prev = document.querySelector('#galery .buttons .prev')
let img = document.querySelectorAll('#galery .photos img')

let i = 0

button_next.onclick = function  () {
	img[i].className = ''
	i++ 

	if( i >= img.length){
		i = 0
	}

	img[i].className = 'show'
}

button_prev.onclick = function  () {
	img[i].className  = ''
	i--

	if( i < 0){
		i = img.length - 1
	}

	img[i].className = 'show'
}