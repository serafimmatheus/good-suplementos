import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

const MeusPedidos = async () => {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Acesso Negado!</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProduct: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="max-w-5xl mx-auto px-5 py-8">
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        <PackageSearchIcon />
        Meus Pedidos
      </Badge>

      <div className="flex flex-col gap-5 mt-8">
        {orders.reverse().map((order) => (
          <OrderItem key={order.id} order={order}></OrderItem>
        ))}
      </div>
    </div>
  );
};

export default MeusPedidos;
