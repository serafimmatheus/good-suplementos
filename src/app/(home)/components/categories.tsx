import { prismaClient } from "@/lib/prisma";
import CategoriesItens from "./categories-itens";
import Container from "@/components/ui/container";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <Container className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map((categorie) => (
        <CategoriesItens key={categorie.id} categorie={categorie} />
      ))}
    </Container>
  );
};

export default Categories;
