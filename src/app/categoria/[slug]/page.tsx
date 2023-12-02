import { Badge } from "@/components/ui/badge";
import { totalPriceDiscount } from "@/helpers/total-price-discount";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import ProductItemCategory from "./components/product-item";
import { CATEGORY_ICON } from "@/helpers/constants";
import Container from "@/components/ui/container";

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
    <main className="py-8 px-5 max-w-5xl mx-auto">
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {params.slug}
      </Badge>

      <Container className="gap-4 py-8">
        {products.map((product) => (
          <ProductItemCategory
            key={product.id}
            product={totalPriceDiscount(product, "")}
          />
        ))}
      </Container>
    </main>
  );
};

export default CategoryPage;
