// // Карринг

// // setTimeout(function() {
// //   alert("Привет!");
// // }, 1000);

// // user = {
// //   name: "Nikita",
// //   sayHi() {
// //     alert(this.name);
// //   }
// // };

// // setTimeout(user.sayHi.bind(user), 1000);

// // function mull(a, b) {
// //   return a * b;
// // }

// // let double = mull.bind(null, 2);

// // function ask(question, answer, ok, fail) {
// //   var result = prompt(question, "");
// //   if (result.toLowerCase() == answer.toLowerCase()) ok();
// //   else fail();
// // }

// // var user = {
// //   login: "Василий",
// //   password: "12345",

// //   loginOk: function() {
// //     alert(this.login + " вошёл в сайт");
// //   },

// //   loginFail: function() {
// //     alert(this.login + ": ошибка входа");
// //   },

// //   checkPassword: function() {
// //     ask(
// //       "Ваш пароль?",
// //       this.password,
// //       this.loginOk.bind(this),
// //       this.loginFail.bind(this)
// //     );
// //   }
// // };

// // user.checkPassword();

// // function ask(question, answer, ok, fail) {
// //   var result = prompt(question, "");
// //   if (result.toLowerCase() == answer.toLowerCase()) ok();
// //   else fail();
// // }

// // var user = {
// //   login: "Василий",
// //   password: "12345",

// //   // метод для вызова из ask
// //   loginDone: function(result) {
// //     alert(this.login + (result ? " вошёл в сайт" : " ошибка входа"));
// //   },

// //   checkPassword: function() {
// //     ask(
// //       "Ваш пароль?",
// //       this.password,
// //       function() {
// //         user.loginDone(true);
// //       },
// //       function() {
// //         user.loginDone(false);
// //       }
// //     );
// //   }
// // };

// // var vasya = user;
// // user = null;
// // vasya.checkPassword();

// // function GetBrickVolume(width, height, lenght) {
// //   return width * height * lenght;
// // }

// // let GetBrickVolumeWithWidtht = GetBrickVolume.bind(null, 10, 20);

// // // let GetBrickVolumeWithheight = GetBrickVolumeWithWidtht.bind(null, 20);

// // let volume1 = GetBrickVolumeWithWidtht(8);
// // let volume2 = GetBrickVolumeWithWidtht(12);
// // let volume3 = GetBrickVolumeWithWidtht(15);

// // console.log(volume1);

// // function summ(a, b, c) {
// //   return a + b + c;
// // }

// // function summ(a) {
// //   return function(b) {
// //     return function(c) {
// //       return a + b + c;
// //     };
// //   };
// // }

// // console.log(summ(1)(2)(3));

// // function multi(a) {
// //   return function(b) {
// //     return a * b;
// //   };
// // }

// // let double = multi(2);

// let films = [
//   { year: 2000, tittle: "a" },
//   { year: 1995, tittle: "ab" },
//   { year: 1998, tittle: "abc" },
//   { year: 1975, tittle: "22" },
//   { year: 1965, tittle: "asd" },
//   { year: 1996, tittle: "ff" }
// ];

// let films2 = [
//   { year: 2009, tittle: "a" },
//   { year: 1988, tittle: "ab" },
//   { year: 1923, tittle: "abc" },
//   { year: 1956, tittle: "22" },
//   { year: 1965, tittle: "asd" },
//   { year: 1990, tittle: "ff" }
// ];

// console.table(films);

// function createSort(property) {
//   return function compare(a, b) {
//     if (a[property] > b[property]) return 1;
//     if (a[property] < b[property]) return -1;
//   };
// }

// const sortByYear = createSort("year");
// const sortBytittle = createSort("tittle");

// films2.sort(sortByYear);

// console.table(films2);

// const a = [
//   { year: 1998, tittle: "qwerty" },
//   { year: 1798, tittle: "asdfg" },
//   { year: 1998, tittle: "tryuioj" },
//   { year: 1898, tittle: "nm,f,mn" },
//   { year: 1207, tittle: "q223" }
// ];
// // console.table(a);

// function makeSort(property) {
//   return function sort(a, b) {
//     if (a[property] > b[property]) return 1;
//     if (a[property] < b[property]) return -1;
//   };
// }

// const sortByYear = makeSort("year"),
//   sortBytittle = makeSort("tittle");

// // a.sort(sortByYear);

function summ(a) {
  return function(b) {
    return a + b;
  };
}

const summAny(a){
    return summ(a)
}
