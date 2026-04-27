function PlantCard({ plant, onAddToCart }) {
  return (
    <article className="plant-card">
      <div className="plant-image" aria-hidden="true">
        {plant.image}
      </div>
      <div className="plant-info">
        <div>
          <h3>{plant.name}</h3>
        </div>
        <button type="button" onClick={() => onAddToCart(plant)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default PlantCard;
