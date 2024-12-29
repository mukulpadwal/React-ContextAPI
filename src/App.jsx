import Cart from "./components/Cart";
import ProductItem from "./components/ProductItem";

function App() {
  const items = [
    {
      name: "Laptop",
      price: 100000,
    },
    {
      name: "Mobile",
      price: 40000,
    },
    {
      name: "Charger",
      price: 100,
    },
    {
      name: "Headphones",
      price: 2000,
    },
    {
      name: "Keyboard",
      price: 1500,
    },
    {
      name: "Mouse",
      price: 800,
    },
    {
      name: "Monitor",
      price: 12000,
    },
    {
      name: "Printer",
      price: 5000,
    },
    {
      name: "Webcam",
      price: 2500,
    },
    {
      name: "Speakers",
      price: 3000,
    },
    {
      name: "External Hard Drive",
      price: 6000,
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-full min-h-screen">
      <h1 className="text-7xl font-bold text-center">Ecommerce Cart</h1>

      {/* Product Items */}
      <div className="my-6 flex flex-col items-center justify-center gap-3">
        <h2 className="text-3xl font-semibold">Products</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
          {items.map((item, index) => {
            return (
              <ProductItem
                key={`${item}-${index}`}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="my-6 flex flex-col items-center justify-center gap-3">
        <h2 className="text-3xl font-semibold">Current items in cart</h2>
        <Cart />
      </div>
    </div>
  );
}

export default App;
