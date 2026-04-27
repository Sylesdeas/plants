function CartItem({ plant, onIncrementItem, onDecrementItem }) {
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
        <button onClick={() => onDecrementItem(plant.id)}>-</button>
        <button onClick={() => onIncrementItem(plant.id)}>+</button>
      </div>
    </article>
  );
}

export default CartItem;
