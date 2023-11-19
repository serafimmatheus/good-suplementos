import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

const totalPriceDiscount = (product: Product): ProductWithTotalPrice => {
  if (product.discountPercentage > 0) {
    const discount =
      (Number(product.basePrice) * product.discountPercentage) / 100;
    return {
      ...product,
      totalPrice: Number(product.basePrice) - discount,
    };
  } else {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }
};

export { totalPriceDiscount };
