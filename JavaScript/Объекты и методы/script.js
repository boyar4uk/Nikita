

var Chevy = {
	make: 'Chevy',
	model: 'Aveo',
	year: 1955,
	color: 'red',
	passengers: 4,
	convertible: false,
	mileage: 8000,
	started: false,
	fuel: 0,
	light: function () {
	console.log('Включен ближний свет')
	},
	start: function(){
		this.started = true;
	},
	stop: function(){
		this.started = false;
	},
	drive: function(){
		if(this.started == true){
			if (this.fuel > 0){
			alert(this.make + ' ' + this.model + ' ' + 'Поехали!');
			this.fuel = this.fuel - 1;
			}else {
			alert('Машуину нужно заправить!');
 			this.stop();	
			}
		} else {
			alert('Нужно завести автомобиль!');
		}
	},
	addFuel: function(amount){
		this.fuel = this.fuel + amount;
	}
}

Chevy.start();
Chevy.drive();
Chevy.addFuel(10);
Chevy.drive();
Chevy.start();
Chevy.drive();
console.log(Chevy.fuel);
