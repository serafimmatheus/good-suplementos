import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import TextTitleBase from "@/components/ui/text-title-base";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <main className="py-8">
      <Image
        src="/banner-home-desconto.png"
        alt="até 55% de desconto esse mês"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto px-5"
      />

      <div className="mt-8 px-5 ">
        <Categories />
      </div>

      <div className="my-8">
        <TextTitleBase>Ofertas da semana</TextTitleBase>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-mouses.png"
        alt="até 55% de desconto em mouses"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto px-5"
      />

      <div className="my-8">
        <TextTitleBase>Teclados</TextTitleBase>
        <ProductList products={keyboards} />
      </div>

      <Image
        src="/banner-home-fones.png"
        alt="até 20% de desconto em fones"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto px-5"
      />

      <div className="my-8">
        <TextTitleBase>Mouses</TextTitleBase>
        <ProductList products={mouses} />
      </div>
    </main>
  );
}
