


var one = 0;
var two = 0;
var three = 0;
var four = 0;
var zero =0

var quantity;

for ( quantity = 0; quantity < 10000; quantity++ ){
	var random = Math.floor(Math.random()*5);
	
	if (random == 1){
		one++;
	}else if (random == 2) {
		two++;
	}else if (random == 3) {
		three++;
	}else if (random == 4) {
		four++;
	}else if (random == 0) {
		zero++;
	}

}


document.write('Число 1----- ' +  one + ' Раз' + '<br>');
document.write('Число 2----- ' +  two + ' Раз' + '<br>');
document.write('Число 3----- ' +  three + ' Раз' + '<br>');
document.write('Число 4----- ' +  four + ' Раз' + '<br>');
document.write('Число 0----- ' +  zero + ' Раз' + '<br>');