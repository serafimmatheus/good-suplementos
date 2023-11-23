"use server";
import { CartProduct } from "@/providers/cart";
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
}

export const createCheckout = async (product: ICheckout[], orderId: String) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
  });

  const productMetadata = product.map((product) => ({
    price_data: {
      currency: "brl",
      product_data: {
        name: product.name,
        images: product.imageUrls,
        description: product.description,
      },
      unit_amount: Math.round(product.basePrice * 100),
    },
    quantity: product.quantity,
  }));

  console.log(productMetadata);

  const checkout = await stripe.checkout.sessions.create({
    metadata: {
      orderId: orderId,
    },
    payment_method_types: ["card", "boleto"],
    line_items: productMetadata,
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
  });

  return checkout;
};
