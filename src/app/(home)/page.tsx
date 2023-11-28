import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import TextTitleBase from "@/components/ui/text-title-base";
import PromoBanner from "./components/promo-banner";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const wheyProtein = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "whey-protein",
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

  console.log(creatina);

  return (
    <main className="py-8 lg:pt-0">
      <PromoBanner
        src="/banner-20off-mobile.png"
        alt="até 55% de desconto esse mês"
      />

      <Image
        src="/banner-ofertas-desktop.png"
        alt="alt"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[450px] hidden lg:block object-cover"
      />

      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="mt-8 px-5 ">
          <Categories />
        </div>

        <div className="my-8">
          <TextTitleBase>Ofertas da semana</TextTitleBase>
          <ProductList products={deals} />
        </div>

        <PromoBanner
          src="/banner-creatinas-mobile.png"
          alt="até 20% de desconto em fones"
        />

        <div className="grid-cols-2 gap-10 py-20 hidden lg:grid">
          <Link href="/categoria/pasta-de-amendoim">
            <Image
              src="/banner-pasta-de-amendoim.png"
              alt="até 55% de desconto em mouses"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover"
            />
          </Link>

          <Link href="/categoria/creatinas">
            <Image
              src="/banner-creatinas.png"
              alt="até 55% de desconto em mouses"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover"
            />
          </Link>
        </div>

        <div className="my-8">
          <TextTitleBase>Whey Protein</TextTitleBase>
          <ProductList products={wheyProtein} />
        </div>

        <PromoBanner
          src="/banner-pasta-de-amendoim-mobile.png"
          alt="até 20% de desconto em fones"
        />

        <Image
          src="/banner-frete.png"
          alt="até 55% de desconto em mouses"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full hidden lg:block object-cover py-20"
        />

        <div className="my-8">
          <TextTitleBase>Creatinas</TextTitleBase>
          <ProductList products={creatina} />
        </div>
      </div>
    </main>
  );
}
