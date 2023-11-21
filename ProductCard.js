import React, { useState } from 'react';
import './App.js'
function ProductCard({ product, addToCart }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </div>
  );
}

function ShoppingCart({ cartItems }) {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <p>Количество товаров: {cartItems.length}</p>
    </div>
  );
}

function Shop() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      name: 'Попкорн',
      description: 'Вкус:карамель',
      price: '1500тг',
      image: 'ссылка на картинку...',
    },
    {
        name: 'Сок',
        description: 'Вкус:яблочный',
        price: '700тг',
        image: 'ссылка на картинку...',
      },
      {
        name: 'Шоколадка',
        description: 'Вкус:молочный шоколад с орехами',
        price: '990тг',
        image: 'ссылка на картинку...',
      },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  return (
    <div>
      <div>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default Shop;
