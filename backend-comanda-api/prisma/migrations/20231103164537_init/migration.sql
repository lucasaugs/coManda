-- CreateTable
CREATE TABLE "restaurant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "sheetClient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total" INTEGER NOT NULL DEFAULT 0,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "restaurantId" INTEGER NOT NULL,
    CONSTRAINT "sheetClient_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    CONSTRAINT "item_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_sheetClientTouser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_sheetClientTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "sheetClient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_sheetClientTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_itemTosheetClient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_itemTosheetClient_A_fkey" FOREIGN KEY ("A") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_itemTosheetClient_B_fkey" FOREIGN KEY ("B") REFERENCES "sheetClient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_email_key" ON "restaurant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_cpf_key" ON "restaurant"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "sheetClient_restaurantId_key" ON "sheetClient"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "_sheetClientTouser_AB_unique" ON "_sheetClientTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_sheetClientTouser_B_index" ON "_sheetClientTouser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_itemTosheetClient_AB_unique" ON "_itemTosheetClient"("A", "B");

-- CreateIndex
CREATE INDEX "_itemTosheetClient_B_index" ON "_itemTosheetClient"("B");
