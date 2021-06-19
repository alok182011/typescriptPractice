import React from "react";

const Inheritance: React.FC = () => {
  //Inheritance
  console.log("----- Inheritance -----");

  // Extending  class and Creating child objects

  class Shape {
    Area: number;

    constructor(a: number) {
      this.Area = a;
    }
  }

  class Circle extends Shape {
    disp(): void {
      console.log("Area of the circle:  " + this.Area);
    }
  }

  var obj = new Circle(223);
  obj.disp();

  // Inheriting functionalities

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHi() {
      console.log(`Hi!!! this is ${this.name} and I'm ${this.age} years old.`);
    }
  }

  class Programmer extends Person {
    role: string;

    constructor(name: string, age: number, role: string) {
      super(name, age);
      this.role = role;
    }

    info() {
      this.sayHi();
      console.log(`And I'm an ${this.role}`);
    }
  }

  let person1 = new Person("Aman", 21);
  let programmer1 = new Programmer("Alok", 21, "Intern");
  person1.sayHi();
  programmer1.sayHi(); // Accesing parent class method using child class object
  programmer1.info();

  // Overriding

  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayName() {
      console.log(`${this.name} is an Animal.`);
    }
  }

  class Dogs extends Animal {
    // constructor(name:string) {
    //   super(name);
    // }

    sayName() {
      console.log(`${this.name} is a Dog.`);
    }
  }

  let animal1 = new Animal("Tiger");
  let dog1 = new Dogs("Bull Dog");

  animal1.sayName();
  dog1.sayName(); // here the sayName() method of the Dog class overrides the sayName() method of Animal Class

  return (
    <>
      <h2>Inheritance</h2>
    </>
  );
};

export default Inheritance;
