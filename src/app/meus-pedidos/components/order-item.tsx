import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import OrderProductsItem from "./order-product-items";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProduct: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const payment =
    order.status === "PAYMENT_CONFIRMED" ? "Confirmado" : "Aguardando PGTO";
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div
              className={`flex flex-col gap-1 text-left ${
                order.status === "PAYMENT_CONFIRMED"
                  ? "text-green-600"
                  : "text-orange-400"
              }`}
            >
              Pedido com {order.orderProduct.length} produto(s)
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <p className="text-primary uppercase">{payment}</p>
                </div>

                <div>
                  <p className="font-bold">Data</p>
                  <p className="opacity-70">
                    {dayjs(order.createdAt).format("DD/MM/YYYY")}
                  </p>
                </div>

                <div>
                  <p className="font-bold">PAGAMENTO</p>
                  <p className="opacity-70">Cartão</p>
                </div>
              </div>

              {order.orderProduct.map((orderProduct) => (
                <OrderProductsItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                ></OrderProductsItem>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
