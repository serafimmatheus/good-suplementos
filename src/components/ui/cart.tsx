import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useCart } from "@/providers/cart";
import CartItem from "./cart-item";
import { totalPriceDiscount } from "@/helpers/total-price-discount";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { createOrder } from "@/actions/order";

const Cart = () => {
  const { data: session, status } = useSession();
  const { products, subTotal, totalDiscount, total } = useCart();

  const handleFinishCheckout = async () => {
    if (!session?.user) {
      return;
    }

    const order = await createOrder(products, (session!.user! as any).id);

    console.log((session.user as any).id);

    const checkout = await createCheckout(products as any, (order as any).id);

    // const { data: session, status } = useSession();

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );

    stripe?.redirectToCheckout({ sessionId: checkout.id });
  };

  return (
    <div className="h-full">
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="py-8 flex flex-col gap-5 h-full">
        <ScrollArea className="h-full">
          <div className="flex flex-col h-full gap-5">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={totalPriceDiscount(
                    product,
                    product.selectedVariation
                  )}
                  quantity={product.quantity}
                />
              ))
            ) : (
              <div className="border border-dashed h-full animate-pulse flex justify-center items-center">
                <p className="text-sm opacity-70">Carrinho vazio!</p>
              </div>
            )}
          </div>
        </ScrollArea>

        {products.length > 0 && (
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between item border-t-2 py-2">
              <span className="text-xs opacity-60">Subtotal</span>
              <span className="text-xs opacity-60">
                {subTotal.toLocaleString("pt-br", {
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
                {totalDiscount.toLocaleString("pt-br", {
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

            {session?.user ? (
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
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
