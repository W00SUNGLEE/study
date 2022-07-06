import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

import { data } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

const BookList = () => {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
};

// ReactDOM.render(<BookList />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
