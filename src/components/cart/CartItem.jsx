function CartItem({ plant, onUpdateQuantity }) {
  return (
    <article className="cart-item">
      <div className="cart-item-copy">
        <div className="cart-item-image" aria-hidden="true">
          {plant.image}
        </div>
        <div>
          <h3>{plant.name}</h3>
          <p>Quantity: {plant.quantity}</p>
        </div>
      </div>
      <div className="quantity-controls">
        <button onClick={() => onUpdateQuantity(plant.id, plant.quantity - 1)}>
          -
        </button>
        <button onClick={() => onUpdateQuantity(plant.id, plant.quantity + 1)}>
          +
        </button>
      </div>
    </article>
  );
}

export default CartItem;
