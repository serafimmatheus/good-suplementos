import { prismaClient } from '@/lib/prisma'
import { MenuDesktop } from './menu-desktop'

const Menu = async () => {
  const categories = await prismaClient.category.findMany({})
  return <MenuDesktop categories={categories} />
}

export default Menu
