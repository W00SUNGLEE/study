import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";
// setup vars
const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    id: 2,
    author: "Shannon Olsen and Sandie Sonke",
    title: "Our Class is a Family",
    img: "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    id: 3,
    author: "Brit Bennett",
    title: "The Vanishing Half: A Novel",
    img: "https://m.media-amazon.com/images/I/51NJs+Rj6hL.jpg"
  }
];

/* const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames); */
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// ReactDOM.render(<BookList />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
