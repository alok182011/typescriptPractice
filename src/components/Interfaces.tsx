import React from "react";

const Interfaces: React.FC = () => {
  // Interfaces
  console.log("----- Interfaces -----");
  // Object interface

  interface Name {
    name: string;
    age: number;
  }

  let Person: Name = {
    name: "Alok",
    age: 21,
  };

  console.log(Person);

  // Function interface

  interface Func {
    (a: string): void;
  }

  function greeter(fn: Func, a: string) {
    fn(a);
  }

  function print(s: string) {
    console.log(`Hello! ${s}`);
  }

  greeter(print, "Alok");

  // Adding methods to Object interface

  interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => string;
  }

  let customer: IPerson = {
    firstName: "Alok",
    lastName: "Kumar",
    sayHi: (): string => {
      return "Hi there";
    },
  };

  console.log(customer.sayHi(), customer.firstName, customer.lastName);

  // Array Interfaces

  interface NumList {
    [index: number]: number;
  }

  let numArr: NumList = [1, 2, 3];

  console.log(numArr[0], numArr[1]);

  // Indexed(String) Array Interfaces

  interface StringList {
    [index: string]: string;
  }

  let strArr: StringList = {};

  strArr["name"] = "Alok";
  console.log(strArr);

  // Extending interfaces

  interface Employee {
    name: string;
    age: number;
  }

  interface Post extends Employee {
    post: string;
  }

  let empObj: Post = {
    name: "Alok",
    age: 21,
    post: "Intern",
  };

  console.log(empObj);

  return (
    <>
      <h2>Interfaces</h2>
    </>
  );
};

export default Interfaces;
