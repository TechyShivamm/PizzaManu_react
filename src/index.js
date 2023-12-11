import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {/* <h1>Hello React</h1> */}
      <Hadder />
      <Menu />
      <Footer />
    </div>
  );
}

function Hadder() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <h1 style={style} className="header">
      Fast react pizza company
    </h1>
  );
}

function Menu() {
  const pizza = pizzaData;
  const numPizza = pizza.length;
  // const pizza = [];

  return (
    <div className="menu">
      <h2>Our Menu</h2>;
      {pizza ? (
        <ul className="pizzas">
          {pizza.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu.Please come back later</p>
      )}
      {/* <Pizza
        name="pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      /> */}
    </div>
  );
}
function Pizza(props) {
  // console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we are currently  open!;");
  // else alert("sorry we are closed");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} we are currently open */}
      {isOpen ? (
        <div className="order">
          <p>we're open untill {closeHour}:00. Come visit or order online</p>
          <button className="btn">order</button>
        </div>
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
