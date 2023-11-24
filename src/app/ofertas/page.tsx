import { totalPriceDiscount } from "@/helpers/total-price-discount";
import { prismaClient } from "@/lib/prisma";
import ProductItemCategory from "../categoria/[slug]/components/product-item";
import Container from "@/components/ui/container";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="max-w-5xl mx-auto py-8 px-5">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">Ofertas da semana</h2>
      </div>

      <Container className="items-center justify-between gap-x-2 gap-y-4">
        {deals.map((product) => {
          return (
            <ProductItemCategory
              key={product.id}
              product={totalPriceDiscount(product)}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default DealsPage;
