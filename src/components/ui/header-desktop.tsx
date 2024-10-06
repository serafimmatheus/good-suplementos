'use client'

import { useCart } from '@/providers/cart'
import { Search, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { Card } from './card'
import Cart from './cart'
import { Input } from './input'
import { Separator } from './separator'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

const HeaderDesktop = () => {
  const { products } = useCart()

  return (
    <Card className='py-8 lg:py-0 lg:pt-8 hidden lg:block'>
      <div className='container flex justify-between items-center gap-36'>
        <Link href='/'>
          <Image
            src='/logo/serafa-suplementos.png'
            alt='Serafa Suplementos'
            width={200}
            height={50}
            className='object-contain'
          />
        </Link>

        <form className='relative flex-1'>
          <Input placeholder='Pesquise...' className='border-primary' />
          <Button
            className='absolute top-0 h-10 right-0 rounded-tl-none rounded-bl-none'
            size='icon'
          >
            <Search size={18} />
          </Button>
        </form>

        <div className='flex gap-4'>
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
      <Separator className='mt-4 hidden lg:flex' />
    </Card>
  )
}

export default HeaderDesktop
