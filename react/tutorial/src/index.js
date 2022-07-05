import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// setup vars
const firstBook = {
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
};
const secondBook = {
  author: "Shannon Olsen and Sandie Sonke",
  title: "Our Class is a Family",
  img: "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim optio
          mollitia ad eius reiciendis vitae, voluptatem debitis blanditiis ipsa
          repellat!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
