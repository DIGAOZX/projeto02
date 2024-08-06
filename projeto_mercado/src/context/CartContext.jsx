import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateProductQuantity = async (produto) => {
  try {
    // Obtemos o estado atual dos produtos
    const response = await fetch('http://localhost:3000');
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    let updated = false;
    // Itera pelas categorias e itens para encontrar o produto
    for (const categoria of data) {
      const item = categoria.items.find(item => item.nome === produto.nome);
      if (item) {
        // Atualiza a quantidade do item
        item.quantidade -= 1;
        updated = true;
        break;
      }
    }
    
    // Se atualizou algum item, envia a atualização para o servidor
    if (updated) {
      const updateResponse = await fetch('http://localhost:3000', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!updateResponse.ok) {
        throw new Error(`Erro HTTP: ${updateResponse.status} ${updateResponse.statusText}`);
      }
    }
  } catch (error) {
    console.error('Erro ao atualizar o estoque:', error);
  }
};

  const addToCart = async (produto) => {
    await updateProductQuantity(produto);

    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.nome === produto.nome);

      if (existingProduct) {
        return prevCart.map(item =>
          item.nome === produto.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...produto, quantidade: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
