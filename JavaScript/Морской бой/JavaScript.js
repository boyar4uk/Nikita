/*
var location1 = 2;
var location2 = 3;
var location3 = 4;


var guess;
var guesses = 0;
var hit = 0;

var win = false;



while (win == false) {
	var guess = prompt('Для выстрела введи значение от 0 - 6');
	if (guess < 0 || guess > 6){
		alert('Сука! Введи, что сказанно!');
	}else {
		guesses++;
		console.log(guesses);
		if (guess == location1 || guess == location2 || guess == location3){
			hit++;
			if (hit < 3){
				alert('Ты попал в корабль! Осталось потопить ' + (3 - hit) + ' палубы');
			}if(hit == 3){
					win = true;
					alert('Ты потопил лодку!');
					alert('Твой процент попаданий составил ' + ((hit / guesses) * 100) + '%');
				}
			}else{
				alert('Ты промахнулся!');
			} 

		}
	}
				*/




var guesses = [];
var guess;

	


for (i = 0; i < 3; i++){
	var guess = prompt('Введи число');
	guesses.push(+ guess);

	var repeat = guesses.some(function(item){
	return item == guess;
		})

}


// var repeat = guesses.some(function(item) {
// 	return item == guess; 
// })


document.write(repeat);
document.write(guesses);