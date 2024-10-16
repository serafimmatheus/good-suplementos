'use client'

import type { Product } from '@prisma/client'
import type React from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export interface CartProduct extends Product {
  quantity: number
  totalPrice: number
  selectedVariation: string
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  subTotal: number
  total: number
  totalDiscount: number
  frete: number
  addProductToCart: (product: CartProduct) => void
  decreaseQuantity: (productId: string, selectedVariation: string) => void
  incrementQuantity: (
    productId: string,
    selectedVariation: string,
    stock: number
  ) => void
  deleteProduct: (productId: string) => void
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
  total: 0,
  totalDiscount: 0,
  subTotal: 0,
  frete: 15,
})

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  // JSON.parse(localStorage.getItem("@serafa-sup-ecomerce:cart") || []);

  const frete = 20

  const subTotal = useMemo(() => {
    return products.reduce((acc, curr) => {
      return acc + curr.quantity * Number(curr.basePrice)
    }, 0)
  }, [products])

  const total = useMemo(() => {
    return products.reduce((acc, curr) => {
      return acc + curr.quantity * Number(curr.totalPrice)
    }, 0)
  }, [products])

  const totalDiscount = subTotal - total

  const addProductToCart = (product: CartProduct) => {
    const productAlreadyInCart = products.find(
      (p) =>
        p.id === product.id && p.selectedVariation === product.selectedVariation
    ) as CartProduct

    if (productAlreadyInCart) {
      const updatedProducts = products.map((p) => {
        if (
          p.id === product.id &&
          p.selectedVariation === product.selectedVariation
        ) {
          return {
            ...p,
            quantity: p.quantity + product.quantity,
          }
        }
        return p
      })

      setProducts(updatedProducts)
    } else {
      setProducts([
        ...products,
        {
          ...product,
          quantity: product.quantity,
          selectedVariation: product.selectedVariation,
        },
      ])
    }
  }

  const decreaseQuantity = (productId: string, selectedVariation: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (
            cartProduct.id === productId &&
            cartProduct.selectedVariation === selectedVariation
          ) {
            return { ...cartProduct, quantity: cartProduct.quantity - 1 }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    )
  }

  const incrementQuantity = (
    productId: string,
    selectedVariation: string,
    stock: number
  ) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (
          cartProduct.id === productId &&
          cartProduct.selectedVariation === selectedVariation
        ) {
          return {
            ...cartProduct,
            quantity:
              cartProduct.quantity >= Number(stock)
                ? cartProduct.quantity
                : cartProduct.quantity + 1,
          }
        }

        return cartProduct
      })
    )
  }

  const deleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId))
  }

  useEffect(() => {
    localStorage.setItem('@serafa-sup-ecomerce:cart', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem('@serafa-sup-ecomerce:cart') || '[]')
    )
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        total,
        totalDiscount,
        subTotal,
        frete,
        addProductToCart,
        decreaseQuantity,
        incrementQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default CartProvider
