import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc, category } = menuItem;
        
        // Assigning data-test-id based on category to meet testing requirements
        let testId = "menu-item-all";
        if (category === "Breakfast") testId = "menu-item-breakfast";
        if (category === "Lunch") testId = "menu-item-lunch";
        if (category === "Shakes") testId = "menu-item-shakes";

        return (
          <article key={id} data-test-id={testId} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
