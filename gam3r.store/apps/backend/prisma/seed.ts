/* eslint-disable prettier/prettier */
import { produtos } from "@gstore/core";
import { PrismaClient } from "../generated/prisma";



const prisma = new PrismaClient();

async function seed () {
    await prisma.produto.createMany({
        data: produtos.map((p) => ({...p, id: undefined})),
    });
}

seed();