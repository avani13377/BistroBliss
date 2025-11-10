import '../static/css/menu.css';

function Menu() {
  

  return (
    <>
      <section className="menu-section">
  <h2>
    Browse <span>Our Menu</span>
  </h2>
  <p className="#menu-subtitle">
    Discover delicious dishes made with love — choose your favorite category below.
  </p>

  <div className="menu-cards">
    <div className="menu-card">
      <img src="iconone.png" alt="" />
      <h3>Breakfast</h3>
      <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
      <a href="#">Explore Menu</a>
    </div>

    <div className="menu-card">
      <img src="icontwo.png" alt="" />
      <h3>Main Dishes</h3>
      <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
      <a href="#">Explore Menu</a>
    </div>

    <div className="menu-card">
      <img src="iconthree.png" alt="" />
      <h3>Drinks</h3>
      <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
      <a href="#">Explore Menu</a>
    </div>

    <div className="menu-card">
          <img src="iconfour.png" alt="" />
      <h3>Desserts</h3>
      <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
      <a href="#">Explore Menu</a>
    </div>
  </div>
</section>
    </>
  );
}

export default Menu;