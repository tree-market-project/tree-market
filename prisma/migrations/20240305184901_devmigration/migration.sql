-- CreateTable
CREATE TABLE "response" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "news" BOOLEAN NOT NULL,
    "testing" BOOLEAN NOT NULL,
    "jobs" BOOLEAN NOT NULL,
    "job_post" TEXT NOT NULL,
    "opportunity" BOOLEAN NOT NULL,
    "offer" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
