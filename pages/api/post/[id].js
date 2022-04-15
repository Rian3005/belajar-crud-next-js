import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;
export default async function handle(req, res) {
    const postId = req.query.id

    if (req.method === 'GET') {
        handleUPDATE(postId, res);
    } else if (req.method === 'DELETE') {
        handleDELETE(postId, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`

        )
    }
}
async function handleUPDATE(postId, res) {
    const data = JSON.parse(req.body)
    const posts = await prisma.post.update({
        where: { id: Number(postId) },
        data
    })
    res.json(posts)
}
async function handleDELETE(postId, res) {
    const posts = await prisma.post.delete({
        where: { id: Number(postId) }
    })
    res.json(posts)
}