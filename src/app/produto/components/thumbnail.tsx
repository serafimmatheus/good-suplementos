"use client";

import ProductList from "@/app/(home)/components/product-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TextTitleBase from "@/components/ui/text-title-base";
import { ProductWithTotalPrice } from "@/helpers/total-price-discount";
import { useCart } from "@/providers/cart";
import { Product, Datails as MyDatails, DatailsProduct } from "@prisma/client";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Variant from "./variant";
import Details from "./details";

import { useToast } from "@/components/ui/use-toast";

interface ThumbnailProps {
  product: ProductWithTotalPrice;
  productRelation: Product[];
  details: any[];
}

const Thumbnail = ({ product, productRelation, details }: ThumbnailProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState("");
  const { toast } = useToast();

  const { addProductToCart } = useCart();

  const handlePrevCount = () => {
    if (count === 1) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handleNextCount = () => {
    if (count === product.stock) {
      return;
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const handleAddProductToCart = () => {
    addProductToCart({
      ...product,
      quantity: count,
      selectedVariation: variant,
    });

    toast({
      title: "Produto Adicionado ao carrinho",
      description: "Seu produto foi adicionado ao carrinho com sucesso",
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col md:mt-8 xl:relative xl:w-3/5">
          <div className="bg-accent mb-5 md:p-8 lg:rounded-lg xl:h-full xl:flex xl:items-center xl:justify-center">
            <Image
              src={product.imageUrls[currentImage]}
              alt={product.name}
              height={0}
              width={0}
              sizes="100vw"
              className="w-full h-[320px] object-contain xl:ml-24"
            />
          </div>

          <div className="grid grid-cols-4 px-5 gap-2  xl:hidden">
            {product.imageUrls.map((image, index) => (
              <div
                key={`${image}-${index}`}
                onClick={() => setCurrentImage(index)}
                className={`border-2 ${
                  currentImage === index ? "border-primary" : "border-accent"
                } rounded-md bg-accent lg:aspect-square`}
              >
                <Image
                  src={image}
                  alt={image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-full object-contain p-5 lg:aspect-square"
                />
              </div>
            ))}
          </div>

          <div className="hidden absolute p-8 xl:block">
            {product.imageUrls.map((image, index) => (
              <div
                key={`${image}-${index}`}
                onClick={() => setCurrentImage(index)}
                className={`border-2 ${
                  currentImage === index ? "border-primary" : "border-accent"
                } rounded-md bg-background lg:aspect-square cursor-pointer`}
              >
                <Image
                  src={image}
                  alt={image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-[100px] object-contain p-5 lg:aspect-square "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col px-5 py-8 gap-4 xl:w-2/5">
          <div className="flex flex-col">
            <span className="text-xs opacity-70">Novo | 100 vendidos</span>
            <h3 className="text-lg">{product.name}</h3>
            <span className="text-primary text-xs">Disponível em estoque</span>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className="text-xl font-semibold">
                  {product.totalPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>

                {product.discountPercentage > 0 && (
                  <Badge className="bg-primary text-xs">
                    <ArrowDownIcon size={16} />
                    {product.discountPercentage}%
                  </Badge>
                )}
              </div>

              {product.discountPercentage > 0 && (
                <div className="flex gap-1">
                  <p className="text-sm opacity-60">de </p>
                  <p className="text-sm opacity-60 line-through">
                    {Number(product.basePrice).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              )}
            </div>
            {product.variation.length > 0 && (
              <Variant
                variants={product.variation}
                selectedVariant={setVariant}
              />
            )}
          </div>

          <div className="flex gap-4 items-center">
            <div className="border p-2 rounded-lg" onClick={handlePrevCount}>
              <ArrowLeftIcon size={16} />
            </div>
            <span className="text-sm">{count}</span>

            <div className="border p-2 rounded-lg " onClick={handleNextCount}>
              <ArrowRightIcon size={16} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold">Descrição</h3>

            <p className="text-sm opacity-60 text-justify">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div>
              {(variant.length > 0 && product.variation.length > 0) ||
              product.variation.length === 0 ? (
                <Button
                  className="bg-primary w-full text-sm uppercase"
                  onClick={handleAddProductToCart}
                >
                  Adicionar ao carrinho
                </Button>
              ) : (
                <Button
                  className="bg-accent text-gray-400 w-full text-sm uppercase"
                  disabled
                >
                  Selecione um sabor
                </Button>
              )}
            </div>

            <div className="bg-accent rounded-lg flex gap-3 items-center justify-between py-5 px-3">
              <TruckIcon size={32} />

              <div>
                <h3 className="text-xs font-bold">
                  Entrega via <span>SERAFA Suplementos®</span>{" "}
                </h3>
                <p className="text-xs text-primary">
                  Envio para <b className="font-bold">Curitiba e Região</b>
                </p>
              </div>

              <p className="text-xs font-bold">
                Frete Grátis a partir de R$ 200,00
              </p>
            </div>
          </div>
        </div>
      </div>

      {details.map((detail, index) => (
        <Details key={detail.id} datails={detail} index={index} />
      ))}

      {productRelation.length > 0 && (
        <div className="mb-8 md:mt-24">
          <TextTitleBase>PRODUTOS RECOMENDADOS</TextTitleBase>

          <ProductList products={productRelation} />
        </div>
      )}
    </>
  );
};

export default Thumbnail;
