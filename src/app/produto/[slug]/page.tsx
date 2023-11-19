import { prismaClient } from "@/lib/prisma";

const ProductPage = async ({ params }: any) => {
  const product = await prismaClient.product.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return <div>{params.slug}</div>;
};

export default ProductPage;
