let ship = {
  position: [],
  Shoot: [],
  hit: 0,
  win: false,
  getShoot: function() {
    let shoot = +prompt("Введи число от 0 до 10");

    if (shoot == null || isNaN(shoot)) {
      return this.getShoot();
    } else if (shoot > 10 || shoot < 0) {
      alert("Введенное число должно быть больше нуля и меньше десяти!");
      return this.getShoot();
    } else if (
      this.Shoot.some(function(n) {
        return n == shoot;
      })
    ) {
      alert("Ты сюда уже стрелял!!");
      return this.getShoot();
    } else if (
      this.position.some(function(n) {
        return n == shoot;
      })
    ) {
      alert(`Ты попал в отсек под номером: ${shoot}`);
      this.hit++;
    }
    this.Shoot.push(shoot);
    return shoot;
  },

  getPosition: function() {
    this.position[0] = Math.floor(Math.random() * 6);
    for (i = 1; i < 4; i++) {
      this.position[i] = this.position[i - 1] + 1;
    }
  }
};

ship.getPosition();
while (ship.hit != ship.position.length) {
  ship.getShoot();

  if (ship.hit == ship.position.length) {
    alert(`Ты потопил корабыль!`);
  }
}

console.log(ship.Shoot);
