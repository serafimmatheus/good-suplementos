import { prismaClient } from '@/lib/prisma'
import CategoriesItens from './categories-itens'

const fixCategories = [
  {
    id: '1',
    name: 'Ofertas',
    slug: 'ofertas',
    imageUrl: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Catálogo',
    slug: 'catalogo',
    imageUrl: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const Categories = async () => {
  const categories = await prismaClient.category.findMany({})

  const newCategories = [...categories, ...fixCategories]

  return (
    <div className='flex w-full gap-y-2 gap-x-2 items-center justify-between'>
      {newCategories.map((categorie) => (
        <CategoriesItens key={categorie.id} categorie={categorie} />
      ))}
    </div>
  )
}

export default Categories
