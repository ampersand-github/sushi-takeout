/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDtail" (
    "id" TEXT NOT NULL,
    "withoutWasabi" BOOLEAN NOT NULL,
    "count" INTEGER NOT NULL,
    "orderId" TEXT NOT NULL,
    "sushiId" TEXT NOT NULL,

    CONSTRAINT "OrderDtail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sushi" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Sushi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SushiSetToSushi" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "sushiId" TEXT NOT NULL,
    "sushiSetId" TEXT NOT NULL,

    CONSTRAINT "SushiSetToSushi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SushiSet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "SushiSet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDtail" ADD CONSTRAINT "OrderDtail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDtail" ADD CONSTRAINT "OrderDtail_sushiId_fkey" FOREIGN KEY ("sushiId") REFERENCES "Sushi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SushiSetToSushi" ADD CONSTRAINT "SushiSetToSushi_sushiId_fkey" FOREIGN KEY ("sushiId") REFERENCES "Sushi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SushiSetToSushi" ADD CONSTRAINT "SushiSetToSushi_sushiSetId_fkey" FOREIGN KEY ("sushiSetId") REFERENCES "SushiSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
