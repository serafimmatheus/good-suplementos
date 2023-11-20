import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useCart } from "@/providers/cart";

const Cart = () => {
  const { products } = useCart();
  return (
    <div>
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm uppercase border-2 border-primary"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            {product.name} - {product.quantity}
          </div>
        ))}
    </div>
  );
};

export default Cart;
