import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/").then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  console.log("products", products);

  const allProd = products.map((prod: any) => {
    return (
      <Card
        brand={prod.brand}
        title={prod.title}
        category={prod.category}
        description={prod.description}
        price={prod.price}
        thumbnail={prod.thumbnail}
      ></Card>
    );
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header></Header>
      {allProd}
    </div>
  );
}

export default App;
