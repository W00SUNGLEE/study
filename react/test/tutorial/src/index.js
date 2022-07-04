import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

/* const Greeting = () => {
  return (
    <div>
      <h4>hello world</h4>
    </div>
  );
}; */

/* const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
}; */

ReactDOM.render(<Greeting />, document.getElementById("root"));
