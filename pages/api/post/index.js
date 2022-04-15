import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient
export default async function handle(req, res) {
    const data = JSON.parse(req.body)

    const result = await prisma.post.create({
        data
    })
    res.json(result)
}