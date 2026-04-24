function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div>
        <p className="brand-mark">Proper Plants</p>
        <p className="brand-subtitle">Houseplants for every room</p>
      </div>
      <div
        className="cart-badge"
        aria-label={`Cart contains ${cartCount} items`}
      >
        <span className="cart-badge-icon">🛒</span>
        <span>{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
