"use client";

import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { KeyboardIcon } from "lucide-react";
import Link from "next/link";

interface CategoriesItensProps {
  categorie: Category;
}

const CategoriesItens = ({ categorie }: CategoriesItensProps) => {
  return (
    <Link href={`/categorias/${categorie.slug}`} className="w-full">
      <Badge variant="outline" className="px-4 py-3 w-full rounded-lg">
        <KeyboardIcon />
        <span className="text-xs font-semibold">{categorie.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoriesItens;
