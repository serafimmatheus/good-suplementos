import { Badge } from "@/components/ui/badge";
import { totalPriceDiscount } from "@/helpers/total-price-discount";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import ProductItemCategory from "./components/product-item";
import { CATEGORY_ICON } from "@/helpers/constants";

const CategoryPage = async ({ params }: any) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },

    include: {
      category: true,
    },
  });

  return (
    <main className="py-8 px-5">
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {params.slug}
      </Badge>

      <div className="grid grid-cols-2 gap-4 py-8">
        {products.map((product) => (
          <ProductItemCategory
            key={product.id}
            product={totalPriceDiscount(product)}
          />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;
