/*
  Warnings:

  - You are about to drop the column `variationId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `variations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_variationId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "variationId",
ADD COLUMN     "variation" TEXT[];

-- DropTable
DROP TABLE "variations";
