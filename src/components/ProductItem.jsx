import { useCart } from "../context/Cart";

/* eslint-disable react/prop-types */
function ProductItem(props) {
  // const { cart, setCart } = useContext(CartContext);
  const cartContext = useCart();

  return (
    <div>
      <p>Product Name : {props.name}</p>
      <p>Price : Rs{props.price}</p>
      <button
        onClick={() => {
          cartContext.setCart([
            ...cartContext.cart,
            {
              name: props.name,
              price: parseInt(props.price),
            },
          ]);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
export default ProductItem;
