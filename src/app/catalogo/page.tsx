import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogoPage = async () => {
  const catalogo = await prismaClient.category.findMany({});

  return (
    <main className="py-8 px-5">
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        <ShapesIcon />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 justify-between gap-4 py-8">
        {catalogo.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
};

export default CatalogoPage;
