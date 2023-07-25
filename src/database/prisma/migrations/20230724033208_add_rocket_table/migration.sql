-- CreateTable
CREATE TABLE "Rockets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "sequence" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "stages" INTEGER,
    "boosters" INTEGER,
    "cost_per_launch" INTEGER,
    "success_rate_pct" INTEGER,
    "first_flight" TIMESTAMP(3),
    "country" TEXT,
    "company" TEXT,
    "wikipedia" TEXT,
    "description" TEXT,
    "flickr_images" TEXT[],

    CONSTRAINT "Rockets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Launch" ADD CONSTRAINT "Launch_rocket_fkey" FOREIGN KEY ("rocket") REFERENCES "Rockets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
