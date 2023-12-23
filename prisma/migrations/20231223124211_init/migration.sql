-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ONGOING', 'Uncompleted', 'Completed');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "published" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'Uncompleted',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
