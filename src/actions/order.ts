"use server";

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

const createOrder = async (cardProducts: CartProduct[], userId: string) => {
  await prismaClient.order.create({
    data: {
      userId: userId,
      status: "WAITING_FOR_PAYMENT",
      orderProduct: {
        createMany: {
          data: cardProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });
};

export { createOrder };
