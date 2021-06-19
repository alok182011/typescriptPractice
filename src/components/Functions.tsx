import React from "react";

const Functions: React.FC = () => {
  // Functions

  console.log("----- Functions -----");

  //  Basics

  function Print(): void {
    console.log("I'm a function");
  }

  Print();

  // Function with arguments

  function Calc(a: number, b: number): number {
    return a + b;
  }

  console.log(Calc(2, 5));

  // Overloading

  function add(a: string, b: string): string;
  function add(a: number, b: number): number;

  function add(a: any, b: any): any {
    return a + b;
  }

  // Optional parameters and default values

  function disp(x: any, y?: any): void {
    console.log(x, y);
  }

  disp("abc");
  disp(1, "xyz");

  function disp1(x: any, y: any = 5): void {
    console.log(x, y);
  }

  disp1("abc");
  disp1(1, "xyz");

  // Function as parameter

  function greeter(fn: (a: string) => void, a: string) {
    fn(a);
  }

  function print(s: string) {
    console.log(`Hello! ${s}`);
  }

  greeter(print, "Alok");

  // Return a function

  function temp(): any {
    return function printName(a: string): void {
      console.log(a);
    };
  }

  const printNam = temp();
  printNam("Alok");

  return (
    <>
      <h2>Functions</h2>

      <p>
        {add("Hello ", "Alok")} {add(10, 20)}
      </p>
    </>
  );
};

export default Functions;
