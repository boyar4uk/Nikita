let clock = document.querySelector("#clock");

let color = document.querySelector("#color");

function HexClock() {
  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

  if (h.length < 2) {
    h = "0" + h;
  }

  if (m.length < 2) {
    m = "0" + m;
  }

  if (s.length < 2) {
    s = "0" + s;
  }

  let time2 = new Date();
  let h2 = time.getHours().toString();
  let m2 = time.getMinutes().toString();
  let s2 = time.getSeconds().toString();

  let ClockString = h + ":" + m + ":" + s;

  let ColorString = "#" + h + m + s;

  clock.textContent = ClockString;
  color.textContent = ColorString;

  document.body.style.background = ColorString;
}

HexClock();
setInterval(HexClock, 1000);
