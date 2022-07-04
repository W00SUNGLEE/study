import React from "react";
import ReactDOM from "react-dom";

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

const Greeting = () => {
  return <h1>hello world</h1>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
