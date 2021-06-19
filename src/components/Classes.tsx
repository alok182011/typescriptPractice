import React from "react";

const Classes: React.FC = () => {
  // Classes

  console.log("----- Classes -----");

  // Definition and declaration and Constructor and Functions and properties

  class Employee {
    empCode: number;
    empName: string;

    constructor(empcode: number, name: string) {
      this.empCode = empcode;
      this.empName = name;
    }

    getSalary(): number {
      return 10000;
    }
  }

  let emp = new Employee(100, "Alok");

  console.log(emp.empCode, emp.empName, emp.getSalary());

  // Implementing interface

  interface IEmployee1 {
    empCode: number;
    name: string;
    getSalary1: (a: number) => number;
  }

  class Employee1 implements IEmployee1 {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
      this.empCode = code;
      this.name = name;
    }

    getSalary1(empCode: number): number {
      return empCode;
    }
  }

  let emp1 = new Employee1(1, "Steve");

  console.log(emp1.empCode, emp1.name, emp1.getSalary1(4));

  return (
    <>
      <h2>Classes</h2>
    </>
  );
};

export default Classes;
