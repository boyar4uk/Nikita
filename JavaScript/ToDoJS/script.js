let myNodeList = document.getElementsByTagName("li");
let i;

for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00d7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let j;

console.log(close);

for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("ul");

list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Поле не может быть пустым!");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
}

let button = document.querySelector(".addButton");

button.addEventListener("click", newElement);
