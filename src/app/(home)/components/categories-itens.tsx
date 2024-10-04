'use client'

import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/helpers/constants'
import type { Category } from '@prisma/client'
import Link from 'next/link'

interface CategoriesItensProps {
  categorie: Category
}

const CategoriesItens = ({ categorie }: CategoriesItensProps) => {
  return (
    <Link href={`/categoria/${categorie.slug}`}>
      <div className='flex items-center rounded-lg gap-2 py-6'>
        {CATEGORY_ICON[categorie.slug as keyof typeof CATEGORY_ICON]}
        <p className='text-xs font-semibold hover:text-gray-500 transition-colors'>
          {categorie.name}
        </p>
      </div>
    </Link>
  )
}

export default CategoriesItens
