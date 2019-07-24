var location1 = 1;
var location2 = 2;
var location3 = 3;

var guess = 0;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt('Введи число от 0 - 6');

	if (guess < 0 || guess > 6){
		alert('Сука введи что сказанно!');
	}else {
		guesses ++;
		if(guess == location1 || guess == location2 || guess == location3){
			hits ++;
			alert('Ты попал!');
			if (hits == 3){
				isSunk = true;
				alert('Ты потопил корабль!');
			}
		}else {
			alert('Ты промахнулся!');
		}
	}
}