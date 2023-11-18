import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <main className="px-5 py-8">
      <Image
        src="/banner-home-desconto.png"
        alt="até 55% de desconto esse mês"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </main>
  );
}
