import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function allUsers() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    return allUsers
}