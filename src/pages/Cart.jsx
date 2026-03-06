import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/slices/cartSlice";
import { useMemo } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2>Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center mb-2"
            >
              <span>
                {item.title} - ${item.price}
              </span>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeItem(index))}
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h4 className="mt-4">Total: ${totalPrice}</h4>

        <button
          className="btn btn-warning mt-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Cart;