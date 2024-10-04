'use client'

import { useCart } from '@/providers/cart'
import { LogInIcon, LogOutIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import { Card } from './card'
import Cart from './cart'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './sheet'

const HeaderDesktop = () => {
  const { data: session, status } = useSession()

  const { products } = useCart()

  const handleLogin = async () => {
    await signIn()
  }

  const handleLogOut = async () => {
    await signOut()
  }

  return (
    <Card className='py-8 px-5 hidden lg:block'>
      <div className='container flex justify-between items-center '>
        <Link href='/'>
          <h1>
            SERAFA <span>Suplementos</span>
          </h1>
        </Link>

        <div>
          <ul className='flex gap-10 items-center'>
            <Link href='/'>
              <li className='font-bold'>Inicio</li>
            </Link>
            <hr className='w-[2px] h-6 bg-accent' />
            <Link href='/catalogo'>
              <li className='font-bold'>Catálogo</li>
            </Link>
            <hr className='w-[2px] h-6 bg-accent' />
            <Link href='/ofertas'>
              <li className='font-bold'>Ofertas</li>
            </Link>
          </ul>
        </div>

        <div className='flex gap-4'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <UserIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side='right'>
              <div className='mt-2 flex flex-col gap-4'>
                {status === 'authenticated' && session?.user && (
                  <div className='flex flex-clo'>
                    <div className='flex item-center gap-2 my-4'>
                      <Avatar>
                        <AvatarFallback>
                          {session.user.name?.[0]?.toUpperCase() ?? ''}
                        </AvatarFallback>
                        {session.user.image && (
                          <AvatarImage src={session.user.image} />
                        )}
                      </Avatar>

                      <div className='flex flex-col'>
                        <p className='font-medium'>{session.user.name}</p>
                        <span className='text-sm opacity-60'>
                          Boas compras!
                        </span>
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
      </div>
    </Card>
  )
}

export default HeaderDesktop
