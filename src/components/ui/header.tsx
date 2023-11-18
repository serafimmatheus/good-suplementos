import {
  CarIcon,
  CarrotIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex justify-between items-center p-8">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <Button variant="outline" size="icon">
            <CarrotIcon />
          </Button>

          <Button variant="outline" size="icon">
            <CarIcon />
          </Button>

          <Button variant="outline" size="icon">
            <ShoppingBagIcon />
          </Button>
        </SheetContent>
      </Sheet>

      <h1>
        GOOD <span>Suplementos</span>
      </h1>

      <Button variant="outline" size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
