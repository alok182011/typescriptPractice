import React from "react";

const ObjNArrays: React.FC = () => {
  //Objects And Arrays

  console.log("----- Objects And Arrays -----");

  // Object Literal

  let person = {
    name: "Alok",
    age: 21,
  };

  console.log(person, person.name);

  //Destructuring object

  const { name, age }: { name: string; age: number } = person;

  // Destructuring arrays

  let arr = ["alok", 21];

  const [name1, age1] = arr;

  return (
    <>
      <h2>Objects And Arrays</h2>

      <p>
        {person.name} {person.age}
      </p>

      <p>
        {name} {age}
      </p>

      <p>
        {name1} {age1}
      </p>
    </>
  );
};

export default ObjNArrays;
