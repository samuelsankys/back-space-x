/*
  Warnings:

  - You are about to drop the column `rocket` on the `Launch` table. All the data in the column will be lost.
  - Added the required column `rocket_id` to the `Launch` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Launch" DROP CONSTRAINT "Launch_rocket_fkey";

-- AlterTable
ALTER TABLE "Launch" DROP COLUMN "rocket",
ADD COLUMN     "rocket_id" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "Launch" ADD CONSTRAINT "Launch_rocket_id_fkey" FOREIGN KEY ("rocket_id") REFERENCES "Rockets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
