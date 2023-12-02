import { ProductWithTotalPrice } from "@/helpers/total-price-discount";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useCart } from "@/providers/cart";
import { useToast } from "@/components/ui/use-toast";

interface CartItemProps {
  product: ProductWithTotalPrice;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { decreaseQuantity, incrementQuantity, deleteProduct } = useCart();
  const { toast } = useToast();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-accent w-[77px] h-[77px] flex items-center justify-center rounded-lg">
          <Image
            src={product.imageUrls[0]}
            alt={product.slug}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-w-[80%] max-h-[70%] object-contain"
          />
        </div>

        <div className="flex flex-col w-full">
          <p className="text-xs overflow-hidden text-ellipsis">
            {product.name} - {product.selectedVariation}
          </p>

          <div className="flex gap-2">
            <p className="text-xs">
              {product.totalPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-xs line-through">
              {Number(product.basePrice).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div
              className="border p-2 rounded-lg"
              onClick={() =>
                decreaseQuantity(product.id, product.selectedVariation)
              }
            >
              <ArrowLeftIcon size={16} />
            </div>
            <span className="text-sm">{quantity}</span>

            <div
              className="border p-2 rounded-lg "
              onClick={() =>
                incrementQuantity(
                  product.id,
                  product.selectedVariation,
                  product.stock
                )
              }
            >
              <ArrowRightIcon size={16} />
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          deleteProduct(product.id);
          toast({
            variant: "destructive",
            title: "Produto removido do carrinho",
            description: ` ${product.name} - ${product.selectedVariation} foi removido do carrinho.`,
          });
        }}
      >
        <TrashIcon size={16} className="opacity-70" />
      </Button>
    </div>
  );
};

export default CartItem;
