function Person(name, age) {
    // Initialize properties
    this.name = name;
    this.age = age;
  
    // Method to greet the person
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old.");
    };
  }
  
  // Create new Person objects
  const person1 = new Person("Yash", 22);
  const person2 = new Person("Angad", 23);
  
  // Call the sayHello method
  person1.sayHello(); // Output: Hello, my name is John Doe. I am 30 years old.
  person2.sayHello(); // Output: Hello, my name is Jane Smith. I am 25 years old.
  