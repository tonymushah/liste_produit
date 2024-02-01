import { PrismaClient } from '@prisma/client';
import MutliCriteriaSearch from './src/lib/MutliCriteriaSearch/index';

const prisma = new PrismaClient();

async function main() {
    const criteria = new MutliCriteriaSearch("meilleur prix");
    console.log(await criteria.exec(prisma, 0, 3))
}

main().catch(console.error).finally(async () => {
    await prisma.$disconnect();
})