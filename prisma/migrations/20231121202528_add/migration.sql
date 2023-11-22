-- AlterTable
ALTER TABLE "products" ADD COLUMN     "variationId" TEXT;

-- CreateTable
CREATE TABLE "variations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "variations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "variations_slug_key" ON "variations"("slug");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "variations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
