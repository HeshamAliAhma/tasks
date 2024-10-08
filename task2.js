const calculator = {
  num1: 19,
  num2: 10,

  sum: function() {
    return this.num1 + this.num2;
  },

  describeSum: function() {
    console.log(`The sum of ${this.num1} and ${this.num2} is ${this.sum()}.`);
  }
};

calculator.describeSum();
