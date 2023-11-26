import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/categoria/${category.slug}`}>
      <div className="flex w-full h-[150px] items-center justify-center rounded-t-lg bg-category-item-gradient">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[80%] h-[80%] items-center justify-center object-contain"
        />
      </div>

      <div className="text-center bg-accent py-3 rounded-b-lg">
        <p className="text-sm">{category.name}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
