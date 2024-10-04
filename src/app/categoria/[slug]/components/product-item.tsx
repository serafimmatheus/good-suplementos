import type { ProductWithTotalPrice } from '@/helpers/total-price-discount'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { ArrowDownIcon } from 'lucide-react'
import Link from 'next/link'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

const ProductItemCategory = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/produto/${product.slug}`}>
      <div className='flex w-full flex-col gap-4'>
        <div className='relative bg-accent w-full h-[170px] rounded-lg flex items-center justify-center p-2'>
          <Image
            src={product.imageUrls[0]}
            alt={product.slug}
            height={0}
            width={0}
            sizes='100vw'
            className='w-full h-auto object-contain max-h-[70%]'
          />

          {product.discountPercentage > 0 && (
            <Badge className='absolute top-2 left-2 flex gap-1'>
              <ArrowDownIcon size={18} />
              {product.discountPercentage}%
            </Badge>
          )}
        </div>

        <div>
          <p className='w-full text-sm overflow-hidden text-ellipsis whitespace-nowrap'>
            {product.name}
          </p>

          <div className='flex gap-3 items-center'>
            {product.discountPercentage > 0 ? (
              <div className='flex flex-col'>
                <p className='font-semibold'>
                  {product.totalPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>

                <p className='opacity-60 line-through text-sm'>
                  de{' '}
                  {Number(product.basePrice).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
            ) : (
              <p className='font-semibold'>
                {Number(product.basePrice).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItemCategory
