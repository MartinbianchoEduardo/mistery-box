-- AlterTable
ALTER TABLE "Rarity" ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deleted" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Weapons" ADD COLUMN     "deleted" TIMESTAMP(3);
