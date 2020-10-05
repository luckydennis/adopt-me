import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, { name: "Meepo", animal: "Cat", breed: "mixed" }),
    React.createElement(Pet, { name: "max", animla: "Dog", breed: "golden" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
