import React from "react";
import ReactDOM from "react-dom";

// Nested Componentes, React Tools

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
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
  return <h4>Amelia Hepworth</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
