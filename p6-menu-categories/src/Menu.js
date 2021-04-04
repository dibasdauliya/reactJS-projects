import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map(({ id, price, desc, img, title }) => (
        <article className="menu-item" key={id}>
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4>{price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;