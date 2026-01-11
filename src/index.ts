import {PrismaClient} from "@prisma/client"

const client = new PrismaClient();

async function createUser() {
     await client.user.create({
     data: {
        username : "yogesh rand",
        password : "123456",
        age  :  35,
        city : "delhi"
     }
 })
}

createUser();