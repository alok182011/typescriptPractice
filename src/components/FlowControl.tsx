import React from "react";

const FlowControl: React.FC = () => {
  //Flow Control Statements

  console.log("----- Flow Control -----");

  //if-else

  let x: number = 5;
  let y: number = 10;

  if (x < y) {
    console.log("x is smaller than y.");
  } else {
    console.log("x is greater than or equal to y.");
  }

  //switch

  let rank: number = 2;

  switch (rank) {
    case 1:
      console.log("First");
      break;
    case 2:
      console.log("Second");
      break;
    case 3:
      console.log("Third");
      break;
    default:
      console.log("Fail");
  }

  //for loop and forEach and for...in and map function

  let tempArray: any[] = ["alok", 1, true.toString()];

  for (let i = 0; i < tempArray.length; i++) {
    console.log("for loop : " + tempArray[i]);
  }

  tempArray.forEach((item) => {
    console.log("for each : " + item);
  });

  for (let i in tempArray) {
    console.log("for...in : " + i, tempArray[i]);
  }

  // while loop

  let i: number = 1;

  while (i <= 3) {
    console.log("while loop : " + i);
    i++;
  }

  return (
    <>
      <h2>Flow Control Statements</h2>

      <p>
        {`x=5 < y=10 :`} {x < y ? <span>true</span> : <span>false</span>}
      </p>

      <p>
        {tempArray.map((item) => {
          return <span key={item}>{item} </span>;
        })}
      </p>
    </>
  );
};

export default FlowControl;
