

// // function getPerson (name, family, age) {
// // 	const person = {
// // 		name: name,
// // 		family: family,
// // 		age: age,
// // 		sayHello: function(){
// // 			console.log(`Всем привет! меня зовут ${this.name} ${this.family} мне ${this.age} лет!`)
// // 		}
// // 	} 
// // 	return person;
// // }

// // const person1 = getPerson('Никита','Боярчук','25');

// // const person2 = getPerson('Саша','Vasilinets','27');

// // person1.sayHello();
// // console.log(person1.name);
// // person2.sayHello();


// function Person (name,family,age) {
// 	this.name = name
// 	this.family = family
// 	this.age = age
// }



// const Nikita = new Person('Nikita','Boyar4uk','25');
// console.log(Nikita);
// Nikita.sayHello();


// class Person {
// 	constructor (name, family, age){
// 		this.age = age
// 		this.family = family
// 		this.name = name
// 	}

// 	sayHello () {
// 		console.log(`Hello! My name ${this.name} ${this.family} i'm ${this.age} years old!`)
// 	}
// }

// const Nikita = new Person ('Nikita', 'Boyar4uk', 25);
// console.log(Nikita);
// Nikita.sayHello();


// function hello() {
// 	console.log('Hello!',this)
// }

// const person = {
// 	name: 'Nikita',
// 	age: 23,
// 	sayHello: hello,
// 	sayHelloWindow: hello.bind(window),
// 	logInfo: function(job,phone){
// 		console.group(`${this.name} info:`)
// 		console.log(`Name is ${this.name}`)
// 		console.log(`Name is ${this.name}`)
// 		console.log(`Phone is ${phone}`)
// 		console.log(`Job is ${job}`)
// 		console.groupEnd()
// 	}
// }

// const Elena = {
// 	name: 'Elena',
// 	age: 23
// }

// person.logInfo.bind(Elena)()

// const funcElenaLogInfo = person.logInfo.bind(Elena)

// funcElenaLogInfo('JS','Nokia')


// const arr = [1,2,3,4,5]

// // function multBy(arr, n){
// // 	return arr.map(function(i){
// // 		return i*n
// // 	})
// // }

// Array.prototype.multBy = function(n){
// 	return this.map(function(i){
// 		return i * n
// 	})
// }

// console.log(arr.multBy(2))



// function createCalcFunction(n){
// 	return function(){
// 		console.log(1000 * n)
// 	}
// }

// const calc = createCalcFunction(42)
// calc()

function createIncrement(n){
	return function(num){
		return n + num
	}
}

const adOne = createIncrement(1)

console.log(adOne(10))


const adTen = createIncrement(10)
console.log(adTen(10))

function UrlGen (dom){
	return function(url){
		return `https://www.${url}.${dom}`
	}
}

const getCom = UrlGen('com')
console.log(getCom('google'))
console.log(getCom('facebook'))

const getUa = UrlGen('ua')
console.log(getUa('google'))











