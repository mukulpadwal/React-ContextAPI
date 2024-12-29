import "./App.css";
import ProductItem from "./components/ProductItem";
import {  useCart } from "./context/Cart";

function App() {
 const cartContext= useCart();

  const totalPrice = cartContext.cart.reduce((total, item) => {
    return total += item.price;
  }, 0);

  return (
    <>
      <h1>Ecommerce Cart</h1>

      <div>
        <ProductItem name="Laptop" price="100000" />
        <ProductItem name="Mobile" price="40000" />
        <ProductItem name="Charger" price="100" />
      </div>

      <h2>Current Items IN cart</h2>

      {cartContext.cart.map((item, index) => {
        return (
          <div key={`${item}-${index}`}>
            <p>
              Name : {item.name}, Price : {item.price}
            </p>
          </div>
        );
      })}

      <h3>Total : Rs{totalPrice}</h3>
    </>
  );
}

export default App;
