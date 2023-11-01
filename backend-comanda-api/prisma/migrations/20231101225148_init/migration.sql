-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "restaurants" (
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
CREATE TABLE "sheetClient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total" INTEGER NOT NULL DEFAULT 0,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    CONSTRAINT "sheetClient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sheetClient_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    CONSTRAINT "item_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sheetItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sheetId" INTEGER NOT NULL,
    "splittersNum" INTEGER NOT NULL,
    "sheetClientId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    CONSTRAINT "sheetItems_sheetClientId_fkey" FOREIGN KEY ("sheetClientId") REFERENCES "sheetClient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sheetItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "splitters" (
    "splitUserId" INTEGER NOT NULL,
    "sheetItemsId" INTEGER NOT NULL,

    PRIMARY KEY ("splitUserId", "sheetItemsId"),
    CONSTRAINT "splitters_splitUserId_fkey" FOREIGN KEY ("splitUserId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "splitters_sheetItemsId_fkey" FOREIGN KEY ("sheetItemsId") REFERENCES "sheetItems" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_email_key" ON "restaurants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_cpf_key" ON "restaurants"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "sheetClient_userId_key" ON "sheetClient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "sheetClient_restaurantId_key" ON "sheetClient"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "item_restaurantId_key" ON "item"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "sheetItems_sheetId_key" ON "sheetItems"("sheetId");

-- CreateIndex
CREATE UNIQUE INDEX "sheetItems_sheetClientId_key" ON "sheetItems"("sheetClientId");

-- CreateIndex
CREATE UNIQUE INDEX "sheetItems_itemId_key" ON "sheetItems"("itemId");
