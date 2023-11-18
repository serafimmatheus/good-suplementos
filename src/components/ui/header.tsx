"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
  const { data: session, status } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogOut = async () => {
    await signOut();
  };

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
            {status === "authenticated" && session?.user && (
              <div className="flex flex-clo">
                <div className="flex item-center gap-2 my-4">
                  <Avatar>
                    <AvatarFallback>
                      {session.user.name![0].toUpperCase()}
                    </AvatarFallback>
                    {session.user.image && (
                      <AvatarImage src={session.user.image!} />
                    )}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{session.user.name}</p>
                    <span className="text-sm opacity-60">Boas compras!</span>
                  </div>
                </div>
              </div>
            )}

            {status === "authenticated" ? (
              <Button
                variant="outline"
                size="icon"
                className="w-full gap-2 justify-start px-2"
                onClick={handleLogOut}
              >
                <LogOutIcon size={16} />
                Sair
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                className="w-full gap-2 justify-start px-2"
                onClick={handleLogin}
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}

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
