import React from "react";
import "./App.css";

import VarNData from "./components/VarNData";
import FlowControl from "./components/FlowControl";
import ObjNArrays from "./components/ObjNArrays";
import Functions from "./components/Functions";
import Interfaces from "./components/Interfaces";
import Classes from "./components/Classes";
import Inheritance from "./components/Inheritance";

function App() {
  return (
    <div className="App">
      <h1>TypeScript Practice</h1>
      <VarNData />
      <FlowControl />
      <ObjNArrays />
      <Functions />
      <Interfaces />
      <Classes />
      <Inheritance />
    </div>
  );
}

export default App;
