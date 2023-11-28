import { prismaClient } from "@/lib/prisma";
import Thumbnail from "../components/thumbnail";
import { totalPriceDiscount } from "@/helpers/total-price-discount";
import { Datails } from "@prisma/client";

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
  });

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const details = product.datailsProduct.map((datails: any) => {
    return datails.details;
  });

  console.log(details);

  return (
    <div className="max-w-5xl mx-auto">
      <Thumbnail
        product={totalPriceDiscount(product, "")}
        productRelation={product.category.products}
        details={details}
      />
    </div>
  );
};

export default ProductPage;
