import { prismaClient } from "@/lib/prisma";
import OrderItem from "./order-item";

interface OrderProps {
  userId: string;
}

const Order = async ({ userId }: OrderProps) => {
  const orders = await prismaClient.order.findMany({
    where: {
      userId: userId,
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
    <div className="flex flex-col gap-5 mt-8">
      {orders.reverse().map((order) => (
        <OrderItem key={order.id} order={order}></OrderItem>
      ))}
    </div>
  );
};

export default Order;
