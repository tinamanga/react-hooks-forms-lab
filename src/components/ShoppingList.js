import React from "react";

function ShoppingList({ items }) {
  return (
    <ul className="Items">
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong> ({item.category})
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
