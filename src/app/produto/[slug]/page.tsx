import { totalPriceDiscount } from '@/helpers/total-price-discount'
import { prismaClient } from '@/lib/prisma'
import Thumbnail from '../components/thumbnail'

const ProductPage = async ({ params }: any) => {
  const product = await prismaClient.product.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },

      datailsProduct: {
        include: {
          details: true,
        },
      },
    },
  })

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  const details = product.datailsProduct.map((datails: any) => {
    return datails.details
  })

  return (
    <div className='container'>
      <Thumbnail
        product={totalPriceDiscount(product, '')}
        productRelation={product.category.products}
        details={details}
      />
    </div>
  )
}

export default ProductPage
