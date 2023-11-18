import {
  CarIcon,
  CarrotIcon,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SignalIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex justify-between items-center p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-lg font-semibold">Menu</SheetHeader>

          <div className="mt-2 flex flex-col gap-4">
            <Button
              variant="outline"
              size="icon"
              className="w-full gap-2 justify-start px-2"
            >
              <LogInIcon size={16} />
              Fazer login
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-full gap-2 justify-start px-2"
            >
              <HomeIcon size={16} />
              Inicio
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-full gap-2 justify-start px-2"
            >
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-full gap-2 justify-start px-2"
            >
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1>
        GOOD <span>Suplementos</span>
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="text-lg font-semibold">Carrinho</SheetHeader>
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
