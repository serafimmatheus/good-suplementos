'use client'

import Link from 'next/link'
import * as React from 'react'

import { BadgePercent } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import type { Category } from '@prisma/client'

interface MenuDesktopProps {
  categories: Category[]
}

export function MenuDesktop({ categories }: MenuDesktopProps) {
  return (
    <>
      {categories.map((category) => (
        <NavigationMenu key={category.id}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <a
                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        href='/'
                      >
                        <div className='mb-2 mt-4 text-lg font-medium'>
                          Creatina
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          A creatina é um composto natural que desempenha um
                          papel fundamental na produção de energia durante o
                          exercício de alta intensidade e curta duração.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href='/docs' title='Introduction'>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href='/docs/installation' title='Installation'>
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href='/docs/primitives/typography'
                    title='Typography'
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/ofertas' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className='flex items-center gap-2'>
                  <BadgePercent color='#fe1616' size={18} />
                  Ofertas
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
