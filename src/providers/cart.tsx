"use client";

import { Product } from "@prisma/client";
import React, { createContext, useContext, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseQuantity: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  deleteProduct: (productId: string) => void;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
  decreaseQuantity: () => {},
  incrementQuantity: () => {},
  deleteProduct: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productAlreadyInCart = products.find(
      (p) => p.id === product.id
    ) as CartProduct;

    if (productAlreadyInCart) {
      const updatedProducts = products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: p.quantity + product.quantity,
          };
        }
        return p;
      });

      setProducts(updatedProducts);
    } else {
      setProducts([...products, { ...product, quantity: product.quantity }]);
    }
  };

  const decreaseQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return { ...cartProduct, quantity: cartProduct.quantity - 1 };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const incrementQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }

        return cartProduct;
      })
    );
  };

  const deleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        addProductToCart,
        decreaseQuantity,
        incrementQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
