"use client";

import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/helpers/constants";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoriesItensProps {
  categorie: Category;
}

const CategoriesItens = ({ categorie }: CategoriesItensProps) => {
  return (
    <Link href={`/categoria/${categorie.slug}`} className="w-full">
      <Badge variant="outline" className="px-4 py-3 w-full rounded-lg gap-2">
        {CATEGORY_ICON[categorie.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-semibold">{categorie.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoriesItens;
