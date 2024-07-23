function Calculator() {
    this.result = 0;
  
    // Add method
    this.add = function(value) {
      this.result += value;
      return this; // Return the Calculator object for chaining
    };
  
    // Subtract method
    this.subtract = function(value) {
      this.result -= value;
      return this;
    };
  
    // Multiply method
    this.multiply = function(value) {
      this.result *= value;
      return this;
    };
  
    // Divide method
    this.divide = function(value) {
      if (value === 0) {
        throw new Error("Division by zero is not allowed!");
      }
      this.result /= value;
      return this;
    };
  
    // Get result method (optional)
    this.getResult = function() {
      return this.result;
    };
  }
  
  // Usage example
  const calc = new Calculator();
  const finalResult = calc.add(5).subtract(2).multiply(3).divide(2).getResult();
  
  console.log(finalResult); // Output: 4.5 (5 - 2) * 3 / 2
  