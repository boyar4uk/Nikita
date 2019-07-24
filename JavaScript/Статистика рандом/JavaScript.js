
var one = 0;
var two = 0;
var three = 0;
var four = 0;

var random = Math.floor(Math.random() * 5);


var quantity = 0;


while (quantity < 100) {
	if (random == 1){
		one++;
		quantity++;
		continue;
	}else if (random ==2) {
		two++;
		quantity++;
		continue;
	}else if (random ==3) {
		three++;
		quantity++;
		continue;
	}else if (random ==4) {
		four++;
		quantity++;
		continue;
	}
	
}


document.write(one + "<br>");
document.write(two + "<br>");
document.write(three + "<br>");
document.write(four + "<br>");