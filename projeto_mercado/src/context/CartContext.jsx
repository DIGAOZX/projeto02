// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (produto) => {
    try {
      // Atualiza o estoque no servidor
      await fetch(`http://localhost:3000/produtos/${produto.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantidade: produto.quantidade - 1,
        }),
      });

    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === produto.id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...produto, quantidade: 1 }];
      }
    });
  } catch (error) {
    console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
