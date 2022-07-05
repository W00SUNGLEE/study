import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
};
const Author = () => {
  return (
    <h4
      style={{
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.25rem"
      }}
    >
      Amelia Hepworth
    </h4>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
