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
import { useMemo } from "react";

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

  const subtotal = useMemo(() => {
    return order.orderProduct.reduce((acc, orderProduct) => {
      return (
        acc + orderProduct.quantity * Number(orderProduct.product.basePrice)
      );
    }, 0);
  }, [order.orderProduct]);

  const desconto = useMemo(() => {
    return order.orderProduct.reduce((acc, orderProduct) => {
      return (
        acc +
        (orderProduct.quantity *
          Number(orderProduct.product.basePrice) *
          Number(orderProduct.product.discountPercentage)) /
          100
      );
    }, 0);
  }, [order.orderProduct]);

  const total = subtotal - desconto;

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
              <h2 className="text-sm">
                Pedido com {order.orderProduct.length} produto(s)
              </h2>
              <span className="text-sm">
                feito em {dayjs(order.createdAt).format("DD/MM/YYYY HH:mm")}
              </span>
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
                  variation={orderProduct.selectedVariation ?? ""}
                ></OrderProductsItem>
              ))}

              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between item border-t-2 py-2">
                    <span className="text-xs opacity-60">Subtotal</span>
                    <span className="text-xs opacity-60">
                      {subtotal.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </li>

                  <li className="flex justify-between item border-t-2 py-2">
                    <span className="text-xs opacity-60">Entrega</span>
                    <span className="text-xs opacity-60">GRÁTIS</span>
                  </li>

                  <li className="flex justify-between item border-t-2 py-2">
                    <span className="text-xs opacity-60">Descontos</span>
                    <span className="text-xs opacity-60">
                      -{" "}
                      {desconto.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </li>

                  <li className="flex justify-between item border-t-2 py-2">
                    <span className="text-base">Total</span>
                    <span className="text-base">
                      {total.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </li>

                  {/* {session?.user ? (
                    <Button
                      size="icon"
                      className="w-full gap-2 uppercase font-semibold"
                      onClick={handleFinishCheckout}
                    >
                      <ShoppingCartIcon size={16} />
                      Finalizar compra
                    </Button>
                  ) : (
                    <Button
                      size="icon"
                      className="bg-accent w-full gap-2 uppercase font-semibold"
                      disabled
                    >
                      <ShoppingCartIcon size={16} />
                      Fazer login para finalizar compra
                    </Button>
                  )} */}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
