import PlantCard from "./PlantCard";

function PlantGrid({ plants, onAddToCart }) {
  return (
    <section className="plants-section">
      <div className="section-heading">
        <h2>Available Plants</h2>
        <p>Tap into the collection and add anything you like to your cart.</p>
      </div>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default PlantGrid;
