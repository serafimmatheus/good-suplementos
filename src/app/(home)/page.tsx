import { CarouselApp } from '@/components/shared/carousel'
import TextTitleBase from '@/components/ui/text-title-base'
import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import PromoBanner from './components/promo-banner'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const wheyProtein = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'whey-protein',
      },
    },
  })

  const creatina = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'creatinas',
      },
    },
  })

  return (
    <main className='py-8 lg:pt-0'>
      {/* <div className='border-b py-2 flex justify-center'>
        <Menu />
      </div> */}
      <div className='container'>
        <PromoBanner
          src='/banner-20off-mobile.png'
          alt='até 20% de desconto esse mês'
        />

        <Image
          src='/banner-ofertas-desktop.png'
          alt='até 20% de desconto esse mês'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-[450px] hidden lg:block object-cover rounded-lg'
        />

        <div className='my-8'>
          <TextTitleBase>Ofertas da semana</TextTitleBase>
          <CarouselApp products={deals} />
        </div>

        <PromoBanner
          src='/banner-creatinas-mobile.png'
          alt='até 20% de desconto em fones'
        />

        <div className='grid-cols-2 gap-10 py-20 hidden lg:grid'>
          <Link href='/categoria/pasta-de-amendoim'>
            <Image
              src='/banner-pasta-de-amendoim.png'
              alt='até 55% de desconto em mouses'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full object-cover'
            />
          </Link>

          <Link href='/categoria/creatinas'>
            <Image
              src='/banner-creatinas.png'
              alt='até 55% de desconto em mouses'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full object-cover'
            />
          </Link>
        </div>

        <div className='my-8'>
          <TextTitleBase>Whey Protein</TextTitleBase>
          <CarouselApp products={wheyProtein} />
        </div>

        <PromoBanner
          src='/banner-pasta-de-amendoim-mobile.png'
          alt='até 20% de desconto em fones'
        />

        <Image
          src='/banner-frete.png'
          alt='até 55% de desconto em mouses'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full hidden lg:block object-cover py-20'
        />

        <div className='my-8'>
          <TextTitleBase>Creatinas</TextTitleBase>
          <CarouselApp products={creatina} />
        </div>
      </div>
    </main>
  )
}
