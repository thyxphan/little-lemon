import React from "react";

function Main() {
  return (
    <main>
      <h2>Our Specials</h2>

      <section className="dishes">
        <div className="dish">
          <h3>Dish 1</h3>
          <img src="/dish1.jpg" alt="Dish 1" />
          <p>A delicious Mediterranean dish.</p>
        </div>

        <div className="dish">
          <h3>Dish 2</h3>
          <img src="/dish2.jpg" alt="Dish 2" />
          <p>Fresh ingredients with bold flavors.</p>
        </div>

        <div className="dish">
          <h3>Dish 3</h3>
          <img src="/dish3.jpg" alt="Dish 3" />
          <p>A customer favorite.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;

