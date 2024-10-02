'use server'

import { prismaClient } from '@/lib/prisma'
import type { CartProduct } from '@/providers/cart'

const createOrder = async (cardProducts: CartProduct[], userId: string) => {
  const order = await prismaClient.order.create({
    data: {
      userId: userId,
      status: 'WAITING_FOR_PAYMENT',
      orderProduct: {
        createMany: {
          data: cardProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
            selectedVariation: product.selectedVariation,
          })),
        },
      },
    },
  })

  return order
}

export { createOrder }
