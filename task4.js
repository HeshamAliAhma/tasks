const car = {
  brand: "Toyota",
  model: "Corolla",
  price: 30000,

  getPriceWithTax: function() {
    return this.price * 1.10;
  },

  describeCar: function() {
    const priceWithTax = this.getPriceWithTax();
    console.log(`The ${this.brand} ${this.model} costs ${priceWithTax}.`);
  }
};

car.describeCar();
