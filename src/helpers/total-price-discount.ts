import type { Product } from '@prisma/client'

export interface ProductWithTotalPrice extends Product {
  totalPrice: number
  selectedVariation: string
}

const totalPriceDiscount = (
  product: Product,
  variation: string
): ProductWithTotalPrice => {
  if (product.discountPercentage > 0) {
    const discount =
      (Number(product.basePrice) * product.discountPercentage) / 100
    return {
      ...product,
      totalPrice: Number(product.basePrice) - discount,
      selectedVariation: variation,
    }
  } else {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
      selectedVariation: variation,
    }
  }
}

export { totalPriceDiscount }
