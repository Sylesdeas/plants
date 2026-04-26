import CartItem from "./CartItem";

function Cart({ cart, onUpdateQuantity }) {
  return (
    <aside className="cart-panel">
      <div className="secion-header">
        <h2>Your Cart</h2>
        <p>
          {" "}
          {cart.length === 0
            ? "Your cart is Empty"
            : `You have ${cart.length} items in your cart`}
        </p>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <span aria-hidden="true">🛒</span>
            <p>Add a plant to see it in your cart!</p>
          </div>
        ) : (
          cart.map((plant) => (
            <CartItem
              key={plant.id}
              plant={plant}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))
        )}
      </div>
    </aside>
  );
}

export default Cart;
