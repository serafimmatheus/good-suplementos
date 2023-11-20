import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useCart } from "@/providers/cart";
import CartItem from "./cart-item";
import { totalPriceDiscount } from "@/helpers/total-price-discount";

const Cart = () => {
  const { products, subTotal, totalDiscount, total } = useCart();
  return (
    <div>
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="py-8 overflow-hidden overflow-y-auto h-[295px] flex flex-col gap-2">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={totalPriceDiscount(product)}
              quantity={product.quantity}
            />
          ))
        ) : (
          <div className="border border-dashed h-full animate-pulse flex justify-center items-center">
            <p className="text-sm opacity-70">Carrinho vazio!</p>
          </div>
        )}
      </div>

      {products.length > 0 && (
        <div>
          <ul>
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
