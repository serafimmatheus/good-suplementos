import { totalPriceDiscount } from "@/helpers/total-price-discount";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductsItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;

  variation: string;
}

const OrderProductsItem = ({
  orderProduct,
  variation,
}: OrderProductsItemProps) => {
  const productTotalPriceDiscount = totalPriceDiscount(
    orderProduct.product,
    variation
  );

  return (
    <div className="flex items-center gap-4">
      <div className="bg-accent rounded-lg w-[77px] h-[77px] flex items-center justify-center">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-col bg-accent px-2 py-1 rounded-lg">
          <p className="text-[10px]">
            Vendido e entregue por <span className="text-primary">GOOD</span>
          </p>
        </div>
        <p className="font-bold text-xs">
          {orderProduct.product.name} - {orderProduct.selectedVariation}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-primary font-bold">
            {Number(productTotalPriceDiscount.totalPrice).toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "BRL",
              }
            )}
          </p>

          {productTotalPriceDiscount.discountPercentage > 0 && (
            <p className="text-xs line-through opacity-70">
              {Number(
                productTotalPriceDiscount.basePrice as any
              ).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )}
        </div>
        <p className="opacity-70 text-right text-xs">
          Qtd: {orderProduct.quantity}
        </p>
      </div>
    </div>
  );
};

export default OrderProductsItem;
