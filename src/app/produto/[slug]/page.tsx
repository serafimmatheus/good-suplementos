import { prismaClient } from "@/lib/prisma";
import Thumbnail from "../components/thumbnail";
import { totalPriceDiscount } from "@/helpers/total-price-discount";

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
    },
  });

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <Thumbnail
        product={totalPriceDiscount(product)}
        productRelation={product.category.products}
      />
    </div>
  );
};

export default ProductPage;
