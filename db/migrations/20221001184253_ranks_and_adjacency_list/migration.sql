-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "rank" TEXT;

-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "rank" TEXT;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Set"("id") ON DELETE SET NULL ON UPDATE CASCADE;
