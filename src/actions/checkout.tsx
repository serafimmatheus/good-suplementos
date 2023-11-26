"use server";

import Stripe from "stripe";

interface ICheckout {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrls: string[];
  discountPercentage: number;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  variation: string[];
  quantity: number;
  totalPrice: number;
  selectedVariation: string;
}

export const createCheckout = async (product: ICheckout[], orderId: String) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
  });

  const productMetadata = product.map((product) => ({
    price_data: {
      currency: "brl",
      product_data: {
        name: `${product.name} - ${product.selectedVariation}`,
        images: product.imageUrls,
        description: product.description,
      },
      unit_amount: Math.round(product.basePrice * 100),
    },
    quantity: product.quantity,
  }));

  const checkout = await stripe.checkout.sessions.create({
    metadata: {
      orderId: orderId.toString(),
    },
    payment_method_types: ["card"],
    line_items: productMetadata,
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
    billing_address_collection: "required",
  });

  return checkout;
};
