/*
  Warnings:

  - You are about to drop the column `crew` on the `Launch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Launch" DROP COLUMN "crew";

-- CreateTable
CREATE TABLE "Crews" (
    "id" TEXT NOT NULL,
    "launch_id" VARCHAR(255) NOT NULL,
    "crew" TEXT,
    "role" TEXT,

    CONSTRAINT "Crews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Crews" ADD CONSTRAINT "Crews_launch_id_fkey" FOREIGN KEY ("launch_id") REFERENCES "Launch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
