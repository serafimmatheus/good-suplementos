'use client'

import { useCart } from '@/providers/cart'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import { Card } from './card'
import Cart from './cart'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './sheet'

const Header = () => {
  const { data: session, status } = useSession()

  const { products } = useCart()

  const handleLogin = async () => {
    await signIn()
  }

  const handleLogOut = async () => {
    await signOut()
  }

  return (
    <Card className='py-8 px-5 lg:hidden'>
      <div className='container flex justify-between items-center'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon'>
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side='left'>
            <SheetHeader className='text-lg font-semibold'>Menu</SheetHeader>

            <div className='mt-2 flex flex-col gap-4'>
              {status === 'authenticated' && session?.user && (
                <div className='flex flex-clo'>
                  <div className='flex item-center gap-2 my-4'>
                    <Avatar>
                      <AvatarFallback>
                        {session.user.name![0].toUpperCase()}
                      </AvatarFallback>
                      {session.user.image && (
                        <AvatarImage src={session.user.image!} />
                      )}
                    </Avatar>

                    <div className='flex flex-col'>
                      <p className='font-medium'>{session.user.name}</p>
                      <span className='text-sm opacity-60'>Boas compras!</span>
                    </div>
                  </div>
                </div>
              )}

              {status === 'authenticated' ? (
                <Button
                  variant='outline'
                  size='icon'
                  className='w-full gap-2 justify-start px-2'
                  onClick={handleLogOut}
                >
                  <LogOutIcon size={16} />
                  Sair
                </Button>
              ) : (
                <Button
                  variant='outline'
                  size='icon'
                  className='w-full gap-2 justify-start px-2'
                  onClick={handleLogin}
                >
                  <LogInIcon size={16} />
                  Fazer login
                </Button>
              )}

              <SheetClose asChild>
                <Link href='/'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-full gap-2 justify-start px-2'
                  >
                    <HomeIcon size={16} />
                    Inicio
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href='/ofertas'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-full gap-2 justify-start px-2'
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href='/catalogo'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-full gap-2 justify-start px-2'
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>

              {/* {status === "authenticated" && (
                <SheetClose asChild>
                  <Link href="/meus-pedidos">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-full gap-2 justify-start px-2"
                    >
                      <ListOrderedIcon size={16} />
                      Meus pedidos
                    </Button>
                  </Link>
                </SheetClose>
              )} */}
            </div>
          </SheetContent>
        </Sheet>

        <h1>
          SERAFA <span>Suplementos</span>
        </h1>

        <div className='relative'>
          {products.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 rounded-full text-white text-xs px-1'>
              {products.length}
            </span>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <ShoppingCartIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Card>
  )
}

export default Header
