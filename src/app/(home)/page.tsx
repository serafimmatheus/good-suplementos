import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import TextTitleBase from "@/components/ui/text-title-base";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const alfajors = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "alfajor",
      },
    },
  });

  const creatina = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "creatinas",
      },
    },
  });

  return (
    <main className="py-8 max-w-5xl mx-auto">
      <PromoBanner
        src="/banner-home-desconto.png"
        alt="até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5 ">
        <Categories />
      </div>

      <div className="my-8">
        <TextTitleBase>Ofertas da semana</TextTitleBase>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-mouses.png"
        alt="até 55% de desconto em mouses"
      />

      <div className="my-8">
        <TextTitleBase>Alfajors</TextTitleBase>
        <ProductList products={alfajors} />
      </div>

      <PromoBanner
        src="/banner-home-fones.png"
        alt="até 20% de desconto em fones"
      />

      <div className="my-8">
        <TextTitleBase>Creatinas</TextTitleBase>
        <ProductList products={creatina} />
      </div>
    </main>
  );
}
