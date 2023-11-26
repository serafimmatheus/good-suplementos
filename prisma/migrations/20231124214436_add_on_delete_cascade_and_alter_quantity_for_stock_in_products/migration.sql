/*
  Warnings:

  - You are about to drop the column `stock` on the `order-products` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `order-products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order-products" DROP COLUMN "stock",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "quantity",
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0;
