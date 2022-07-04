import React from "react";
import ReactDOM from "react-dom";

// Nested Componentes, React Tools

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>john doe</h2>;
const Message = () => <p>this is my message</p>;

ReactDOM.render(<Greeting />, document.getElementById("root"));
