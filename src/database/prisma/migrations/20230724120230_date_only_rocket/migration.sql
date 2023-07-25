/*
  Warnings:

  - You are about to alter the column `name` on the `Rockets` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `type` on the `Rockets` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `country` on the `Rockets` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `company` on the `Rockets` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `wikipedia` on the `Rockets` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Rockets" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "type" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "first_flight" SET DATA TYPE DATE,
ALTER COLUMN "country" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "company" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "wikipedia" SET DATA TYPE VARCHAR(255);
