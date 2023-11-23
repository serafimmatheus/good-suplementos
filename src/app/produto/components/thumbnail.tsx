"use client";

import ProductList from "@/app/(home)/components/product-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TextTitleBase from "@/components/ui/text-title-base";
import { ProductWithTotalPrice } from "@/helpers/total-price-discount";
import { useCart } from "@/providers/cart";
import { Product } from "@prisma/client";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Variant from "./variant";

interface ThumbnailProps {
  product: ProductWithTotalPrice;
  productRelation: Product[];
}

const Thumbnail = ({ product, productRelation }: ThumbnailProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState("");

  const { addProductToCart } = useCart();

  const handlePrevCount = () => {
    if (count === 1) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handleNextCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleAddProductToCart = () => {
    addProductToCart({ ...product, quantity: count });
  };

  return (
    <>
      <div className="bg-accent mb-5">
        <Image
          src={product.imageUrls[currentImage]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-[320px] object-contain"
        />
      </div>

      <div className="grid grid-cols-4 px-5 gap-2">
        {product.imageUrls.map((image, index) => (
          <div
            key={`${image}-${index}`}
            onClick={() => setCurrentImage(index)}
            className={`border-2 ${
              currentImage === index ? "border-primary" : "border-accent"
            } rounded-md bg-accent`}
          >
            <Image
              src={image}
              alt={image}
              height={0}
              width={0}
              sizes="100vw"
              className="w-full object-contain p-5"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col px-5 py-8 gap-4">
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
              <Badge className="bg-primary text-xs">
                <ArrowDownIcon size={16} />
                {product.discountPercentage}%
              </Badge>
            </div>

            <div className="flex gap-1">
              <p className="text-sm opacity-60">de </p>
              <p className="text-sm opacity-60 line-through">
                {Number(product.basePrice).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
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
            {/* {product.variation.length === 0 && (
              <Button
                className="bg-primary w-full text-sm uppercase"
                onClick={handleAddProductToCart}
              >
                Adicionar ao carrinho
              </Button>
            )} */}

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
                Entrega via <span>GOOD Suplementos®</span>{" "}
              </h3>
              <p className="text-xs text-primary">
                Envio para <b className="font-bold">todo Brasil</b>
              </p>
            </div>

            <p className="text-xs font-bold">Frete Grátis</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <TextTitleBase>PRODUTOS RECOMENDADOS</TextTitleBase>

        <ProductList products={productRelation} />
      </div>
    </>
  );
};

export default Thumbnail;
