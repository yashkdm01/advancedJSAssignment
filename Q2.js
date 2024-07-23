function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old.");
    };
  }
  
  // Employee constructor inherits from Person
  function Employee(name, age, designation) {
    // Call Person constructor with super() for inheritance
    Person.call(this, name, age);
  
    // Additional property for Employee
    this.designation = designation;
  
    // Method to display employee details
    this.getDetails = function() {
      console.log("Name: " + this.name);
      console.log("Age: " + this.age);
      console.log("Designation: " + this.designation);
    };
  }
  
  // Create new Employee object
  const employee1 = new Employee("John Doe", 30, "Software Engineer");
  
  // Call sayHello (inherited from Person)
  employee1.sayHello(); // Output: Hello, my name is John Doe. I am 30 years old.
  
  // Call getDetails (specific to Employee)
  employee1.getDetails();
  // Output:
  // Name: John Doe
  // Age: 30
  // Designation: Software Engineer
    
  
