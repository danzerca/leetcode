class Batter {
  constructor() {
    this.eat = false;
    this.status = 'liquid';
  }

  action() {
    return 'Pour the batter';
  }
}

class Pancake extends Batter {
  constructor() {
    super();
    this.eat = true;
    this.status = 'solid';
  }

  action() {
    return 'eat the pancake';
  }
}

// var res = new Pancake();
// console.log(res.action());