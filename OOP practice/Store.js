class Store {
  constructor() {
    this.type = 'closed';
    this.location = 'for sale';
    this.quantity = 0;
    this.hours = 'closed';
  }

  open() {
    this.hours = 'open';
  }

  close() {
    this.hours = 'closed';
  }

  stock(amount) {
    this.quantity = this.quantity + amount;
  }

  sell(sold) {
    var remain = this.quantity - sold;
    if (remain < 0) {
      this.quantity = 0;
      return 'There is not enough stock to fulfill this order';
    } else if (remain === 0) {
      this.quantity = 0;
      return 'THere is no inventory left after fulfulling the order. Time to restock';
    } else {
      this.quantity = remain;
      return 'Sold!';
    }
  }
}

class ShoeStore extends Store {
  constructor() {
    super();
    this.type = 'in business';
    this.workers = 5;
  }

  hire() {
    this.workers++;
  }

  fire() {
    this.workers--;
  }
}

// var shoozy = new ShoeStore();
// shoozy.hire();
// console.log(shoozy.workers); //6