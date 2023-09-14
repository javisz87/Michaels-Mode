
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ItemListContainer = () => {
  return (
    <div className="container">
      <h2 className="text-center">Lista de Items</h2>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </div>
  );
};

export default ItemListContainer;