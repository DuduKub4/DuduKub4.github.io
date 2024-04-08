/*
  Warnings:

  - You are about to drop the column `Descricao` on the `Produtos` table. All the data in the column will be lost.
  - You are about to drop the column `Nome` on the `Produtos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produtos" DROP COLUMN "Descricao",
DROP COLUMN "Nome",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
