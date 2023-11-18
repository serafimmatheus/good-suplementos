/*
  Warnings:

  - You are about to drop the column `imageURL` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `imageURLs` on the `products` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "imageURLs",
ADD COLUMN     "imageUrls" TEXT[];
