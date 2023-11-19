import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
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

      <div className="mt-8">
        <h2 className="text-base font-bold mb-4 px-5 ">Ofertas da semana</h2>

        <ProductList products={deals} />
      </div>
    </main>
  );
}
