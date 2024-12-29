import { useCart } from "../context/Cart";

/* eslint-disable react/prop-types */
function ProductItem(props) {
  // const { cart, setCart } = useContext(CartContext);
  const cartContext = useCart();

  return (
    <div className="border rounded-xl flex flex-col items-center justify-center gap-3 p-3">
      <p>Product Name : {props.name}</p>
      <p>Price : Rs {props.price}</p>
      <button
        className="border rounded-xl px-2 py-2 w-full"
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
