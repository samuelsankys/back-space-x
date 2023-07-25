-- CreateTable
CREATE TABLE "Launch" (
    "id" TEXT NOT NULL,
    "upcoming" BOOLEAN NOT NULL,
    "date_precision" VARCHAR(255) NOT NULL,
    "date_local" TIMESTAMP(3) NOT NULL,
    "date_unix" INTEGER NOT NULL,
    "date_utc" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "flight_number" INTEGER NOT NULL,
    "auto_update" BOOLEAN NOT NULL,
    "launchpad" VARCHAR(255) NOT NULL,
    "details" VARCHAR(255),
    "success" BOOLEAN NOT NULL,
    "rocket" VARCHAR(255) NOT NULL,
    "window" INTEGER NOT NULL,
    "net" BOOLEAN NOT NULL,
    "tbd" BOOLEAN NOT NULL,
    "static_fire_date_unix" INTEGER,
    "static_fire_date_utc" TIMESTAMP(3),
    "fairings_reused" BOOLEAN,
    "fairings_recovery_attempt" BOOLEAN,
    "fairings_recovered" BOOLEAN,
    "fairings_ships" VARCHAR(255)[],
    "payloads" VARCHAR(255)[],
    "capsules" VARCHAR(255)[],
    "ships" VARCHAR(255)[],
    "crew" VARCHAR(255)[],

    CONSTRAINT "Launch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cores" (
    "id" TEXT NOT NULL,
    "launch_id" VARCHAR(255) NOT NULL,
    "core" VARCHAR(255),
    "flight" INTEGER,
    "gridfins" BOOLEAN,
    "legs" BOOLEAN,
    "reused" BOOLEAN,
    "landing_attempt" BOOLEAN,
    "landing_success" BOOLEAN,
    "landing_type" BOOLEAN,
    "landpad" BOOLEAN,

    CONSTRAINT "Cores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Failures" (
    "id" TEXT NOT NULL,
    "launch_id" VARCHAR(255) NOT NULL,
    "time" INTEGER,
    "altitude" INTEGER,
    "reason" VARCHAR(255),

    CONSTRAINT "Failures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Links" (
    "id" TEXT NOT NULL,
    "launch_id" VARCHAR(255) NOT NULL,
    "patch_small" VARCHAR(255),
    "patch_large" VARCHAR(255),
    "reddit_campaign" VARCHAR(255),
    "reddit_launch" VARCHAR(255),
    "reddit_media" VARCHAR(255),
    "reddit_recovery" VARCHAR(255),
    "presskit" VARCHAR(255),
    "webcast" VARCHAR(255),
    "youtube_id" VARCHAR(255),
    "article" VARCHAR(255),
    "wikipedia" VARCHAR(255),
    "flickr_small" VARCHAR(255)[],
    "flickr_original" VARCHAR(255)[],

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_launch_id_key" ON "Links"("launch_id");

-- AddForeignKey
ALTER TABLE "Cores" ADD CONSTRAINT "Cores_launch_id_fkey" FOREIGN KEY ("launch_id") REFERENCES "Launch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Failures" ADD CONSTRAINT "Failures_launch_id_fkey" FOREIGN KEY ("launch_id") REFERENCES "Launch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_launch_id_fkey" FOREIGN KEY ("launch_id") REFERENCES "Launch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
