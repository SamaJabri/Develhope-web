-- CreateTable
CREATE TABLE "Laboratory" (
    "laboratory_id" SERIAL NOT NULL,
    "laboratory_name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Laboratory_pkey" PRIMARY KEY ("laboratory_id")
);
