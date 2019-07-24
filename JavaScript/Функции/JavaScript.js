

var pass = '123qwe';

var tryToLogin = 0;

function cap () {
	var a = Math.floor(Math.random()*100);
	var b = Math.floor(Math.random()*100);
	var captch = a + b;
	while (captch != captcha) {
			var captcha = prompt ( 'Введи сумму чисел ' + a + '+ ' + b);
		}
}

while (login != pass ) {
	var login = prompt('Введи пароль');
	
	if (login != pass){
		alert('Пароль не совпадает');
		tryToLogin++;

		if (tryToLogin % 3 == 0){
		cap();
		} 

	}
	
}

alert(tryToLogin);