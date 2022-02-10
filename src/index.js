//TYPE rafce to create boilerplate code

import React from "react";
import reactDom from "react-dom";
//link css to index.js
import "./index.css";
//methods imports
import { books } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

//capitalize first letter to show react component
//returning HTML (JSX), ALWAYS returns
//use camelCase for html tags
//className is a instead of class

//ctrl+/ to comment out in JSX
//ctrl+shift+/ to uncomment in JSX

//Main
function App() {
  console.log(greeting);

  return (
    <div>
      <div>
        <Header />
        <InputName onChange={(e) => console.log(e.target.value)} />
        <InputAuthor onChange={(e) => console.log(e.target.value)} />
        <InputImage onChange={(e) => console.log(e.target.value)} />
        <Button />
      </div>
      <section className="booklist">
        {/* For loop to create books */}
        {books.map((books) => {
          const { title, author, image } = books;
          return <SpecificBook key={books.id} {...books} />;
        })}
      </section>
    </div>
  );
}

//Function for header
const Header = () => {
  return (
    <header>
      <h1 className="header">MY BOOK LIST</h1>
    </header>
  );
};

//Add a book to the booklist after getting input from user
const InputName = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Input book name"
        onChange={props.onChange}
      />
    </div>
  );
};
const InputAuthor = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Input book author"
        onChange={props.onChange}
      />
    </div>
  );
};
const InputImage = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Input book image URL"
        onChange={props.onChange}
      />
    </div>
  );
};
//button for adding a book
const Button = () => {
  const clickHandler = () => {
    alert("Book added! (NOT IMPLEMENTED)");
  };

  return (
    <button className="button" onClick={clickHandler}>
      <h1>ADD A BOOK</h1>
    </button>
  );
};

//RENDER OBJECTS
//looks for - 1) what to render 2) where to render
reactDom.render(<App />, document.getElementById("root"));
