import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { totalPriceDiscount } from '@/helpers/total-price-discount'
import type { Product } from '@prisma/client'
import ProductItem from '../ui/product-item'

interface CarouselProps {
  products: Product[]
}

export function CarouselApp({ products }: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full'
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className='basis-10/12 sm:basis-1/2 md:basis-1/3 lg:basis-[23%]'
          >
            <div className='p-1 select-none'>
              <ProductItem product={totalPriceDiscount(product, '')} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-top-6 left-auto right-12 bg-white text-gray-950 hidden md:flex' />
      <CarouselNext className='-top-6 right-2 bg-white text-gray-950 hidden md:flex' />
    </Carousel>
  )
}
