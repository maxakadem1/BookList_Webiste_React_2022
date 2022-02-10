import React from "react";

//function for Books
const Book = (props) => {
  const { title, author, image } = props;
  //console.log(props);
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h2>{author}</h2>
    </article>
  );
};

export default Book;
