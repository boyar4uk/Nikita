var Pizza = function(name, toppings, bortik, size, price) {
  this.name = name;
  this.toppings = toppings;
  this.bortik = bortik;
  this.size = size;
  this.price = price;
  this.slice = []; // Свойство, пустой масив, хранящий к-во "разрезов пицы".
  this.nachinka = {
    cake: 300,
    beakon: 0,
    cheese: 0,
    tomato: 0,
    olive: 0,
    pepperoni: 0
  };

  this.PizzaWeight = function() {
    for (i = 0; i < toppings.length; i++) {
      switch (toppings[i]) {
        case "beakon":
          this.nachinka.beakon = 10;
          continue;

        case "cheese":
          this.nachinka.cheese = 20;
          continue;

        case "tomato":
          this.nachinka.tomato = 15;
          continue;

        case "olive":
          this.nachinka.olive = 5;
          continue;

        case "pepperoni":
          this.nachinka.pepperoni = 30;
          continue;
      }
    }

    let weight = 0;
    for (name in this.nachinka) {
      weight += this.nachinka[name];
    }
    console.log(`This Pizza weighs ${weight}gr.`);
  };

  this.topingsInfo = function() {
    console.group(`${name} has a next toppings:`); // Выводит информацию о топпингах
    this.toppings.forEach(function(i, arr) {
      console.log(i);
    });
    console.groupEnd();
  };

  this.isBortik = function() {
    // Проверяет на наличие бортика, и возвращает соответсвующую строку, для использования в методе makePizza
    if (bortik) {
      return "bortik";
    } else {
      return "no bortik";
    }
  };

  this.makePizza = function() {
    console.log(
      `${size}cm. pizza with ${this.isBortik()}, and with toppings: ${toppings}. \n Price: ${price}$`
    ); // Выводит информацию о пице
  };

  this.packPizza = function() {
    console.log(`${name} packed into ${size}cm. box. \n Price: ${price}$`); // "Упаковывает пицу, в коробку соответсвующего размера"
  };

  this.makeSlice = function(n) {
    // Метод, "пушит" к - во "разрезов" в свойство Slice, для использования в методах makePieces, costOnePiece
    this.slice.push(+n);
    var pieces = this.slice.reduce(function(sum, current) {
      return sum + current;
    });

    return pieces;
  };

  this.makePieces = function(n) {
    // Метод, возращающий сумму элементов массива "Slice"
    this.makeSlice(n);
    console.log(`${name} pizza cut into ${this.makeSlice(0)} pieces`);
  };

  this.costOnePiece = function() {
    // Метод подщитывающий цену одного кусочка пицы
    console.log(
      `One piec of ${name} costs ${(this.price / +this.makeSlice(0)).toFixed(
        2
      )}$ `
    );
  };
};

let margarita = new Pizza(
  "Margaritta",
  ["beakon", "cheese", "tomato"],
  true,
  50,
  10
);

let pepperoni = new Pizza(
  "Pepperoni",
  ["cheese", "pepperoni", "tomato"],
  false,
  25,
  15
);

let pizzaName = document.querySelector("#name");

console.log(pizzaName);

let pizzaNameValue = document.getElementById("#name").value;

pizzaName.addEventListener("click", hendller);

function hendller() {
  console.log(event.type, event);
}
