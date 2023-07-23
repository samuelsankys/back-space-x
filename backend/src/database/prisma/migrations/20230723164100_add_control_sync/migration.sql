/*
  Warnings:

  - Added the required column `sequence` to the `Launch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Launch" ADD COLUMN     "sequence" INTEGER NOT NULL;
