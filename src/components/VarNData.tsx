import React from "react";

const VarNData: React.FC = () => {
  //Variables and Datatypes

  // number, string, boolean
  let num: number = 5;
  let str: string = "alok";
  let bool: boolean = true;

  //Homogeneous and Heterogeneous arrays
  let homoArray: number[] = [3, 5, 6];
  let heteroArray: any[] = ["alok", 1, true.toString()];

  //enum

  // numeric enum
  enum Positions {
    first = 1,
    second = 2,
    third = 3,
  }

  //String Enum
  enum People {
    first = "alok",
    second = "aman",
  }

  return (
    <>
      <h2>Variables and Datatypes</h2>

      <p>
        Number: {num}, String: {str}, Boolean: {`${bool}`}
      </p>

      <p>
        Homogenous Array: {homoArray}, Heterogenous Array: {heteroArray}
      </p>

      <p>
        Enum : {[Positions.first, Positions.second, Positions.third]} and{" "}
        {Positions["first"]} and {[People.first, People.second]} and{" "}
        {People["first"]}
      </p>
    </>
  );
};

export default VarNData;
