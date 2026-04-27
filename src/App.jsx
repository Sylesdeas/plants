import { useState } from "react";
import plants from "./data";
import Header from "./components/layout/Header";
import PlantGrid from "./components/plants/PlantGrid";
import Cart from "./components/cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plantToAdd) {
    setCart((currentCart) => {
      const matchingPlant = currentCart.find(
        (plant) => plant.id === plantToAdd.id,
      );

      if (matchingPlant) {
        return currentCart.map((plant) =>
          plant.id === plantToAdd.id
            ? { ...plant, quantity: plant.quantity + 1 }
            : plant,
        );
      }

      return [...currentCart, { ...plantToAdd, quantity: 1 }];
    });
  }

  function updateQuantity(plantId, change) {
    setCart((currentCart) =>
      currentCart
        .map((plant) =>
          plant.id === plantId
            ? { ...plant, quantity: plant.quantity + change }
            : plant,
        )
        .filter((plant) => plant.quantity > 0),
    );
  }

  const totalItems = cart.reduce((total, plant) => total + plant.quantity, 0);

  return (
    <div className="app-shell">
      <Header cartCount={totalItems} />
      <main className="page-content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Indoor jungle essentials</p>
            <h1>Find the right plant for your brightest corner.</h1>
            <p className="hero-text">
              Build a leafy little cart from our collection of easy-care
              favorites, statement greens, and shelf-friendly starters.
            </p>
          </div>
        </section>
        <section className="content-grid">
          <PlantGrid plants={plants} onAddToCart={addToCart} />
          <Cart cart={cart} onUpdateQuantity={updateQuantity} />
        </section>
      </main>
    </div>
  );
}

export default App;
