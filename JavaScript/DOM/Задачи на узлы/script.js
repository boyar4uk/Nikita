{
  /* <div>Это</div>
<div>Элементы</div>

<script>
  var elem = document.createElement('div');
  elem.innerHTML = '<b>Новый элемент</b>';

  function insertAfter(elem, refElem) { /* ваш код */
}

//   var body = document.body;

//   // вставить elem после первого элемента
//   insertAfter(elem, body.firstChild); // <--- должно работать

//   // вставить elem за последним элементом
//   insertAfter(elem, body.lastChild); // <--- должно работать
// </script> */}

// var elem = document.createElement("div");
// elem.innerHTML = "<b>Новый элемент</b>";

// function insertAfter(elem, refElem) {

// }

function makeadder(n) {
  return function(m) {
    return m + n;
  };
}

let makeadder10 = makeadder(10);
