import { useCart } from "../context/Cart";

function Cart() {
  const cartContext = useCart();

  const totalPrice = cartContext.cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      {cartContext.cart.map((item, index) => {
        return (
          <div key={`${item}-${index}`} className="">
            <p className="w-full border rounded-xl p-3">
              {item.name} :: Rs {item.price}
            </p>
          </div>
        );
      })}

      <h3 className="text-2xl font-medium">Total : Rs {totalPrice}</h3>
    </div>
  );
}
export default Cart;
