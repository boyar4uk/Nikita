let items = document.querySelectorAll(".item");

let xItems = document.querySelectorAll("#Xitem");

let header = document.querySelector("p");

let getXO = XO();

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function XO() {
  let counetr = 0;
  return function() {
    if (counetr % 2) {
      this.className = "Oitems";
      this.innerHTML = "0";
      counetr++;
      header.innerHTML = "X";
    } else {
      this.className = "Xitems";
      this.innerHTML = "X";
      counetr++;
      header.innerHTML = "0";
    }
    console.log(counetr);
    console.log(event.target);
  };
}

items.forEach(function(i) {
  i.addEventListener("click", getXO, { once: true });
});

function checkWin(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    const someWin = arr[i];
    count = 0;
  }
}

let li = document.getElementsByTagName("li");
console.log(li);
