import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const menuData = [
  { id: 1, title: "Buttermilk Pancakes", category: "Breakfast", price: 15.99, img: "https://via.placeholder.com/150", desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle..." },
  { id: 2, title: "Diner Double", category: "Lunch", price: 13.99, img: "https://via.placeholder.com/150", desc: "Vaporware iPhone mumblecore selvage raw denim..." },
  { id: 3, title: "Godzilla Milkshake", category: "Shakes", price: 6.99, img: "https://via.placeholder.com/150", desc: "Ombucha kombucha chillwave fanny pack 3 wolf moon..." },
  { id: 4, title: "Country Delight", category: "Breakfast", price: 20.99, img: "https://via.placeholder.com/150", desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch." },
  { id: 5, title: "Egg Attack", category: "Lunch", price: 22.99, img: "https://via.placeholder.com/150", desc: "Franzen vegan pabst bicycle rights kickstarter pinterest..." },
  { id: 6, title: "Oreo Dream Shake", category: "Shakes", price: 18.99, img: "https://via.placeholder.com/150", desc: "Portland chicharrones ethical edison bulb, palo santo..." },
];

function App() {
  const [menuItems, setMenuItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterMenu = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(menuData);
    } else {
      const filtered = menuData.filter((item) => item.category === category);
      setMenuItems(filtered);
    }
  };

  return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button id="filter-btn-1" onClick={() => filterMenu("Breakfast")}>
            Breakfast
          </button>
          <button id="filter-btn-2" onClick={() => filterMenu("Lunch")}>
            Lunch
          </button>
          <button id="filter-btn-3" onClick={() => filterMenu("Shakes")}>
            Shakes
          </button>
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
