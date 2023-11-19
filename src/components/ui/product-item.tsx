import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="bg-accent w-[156px] h-[170px] rounded-lg flex items-center justify-center p-2">
        <Image
          src={product.imageUrls[0]}
          alt={product.slug}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto object-contain max-h-[70%]"
        />
      </div>

      <div>
        <p className="w-full text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          {product.name}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
