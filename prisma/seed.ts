// seed.ts
import { PrismaClient, ElementType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando usuários
  const user1 = await prisma.user.create({
    data: {
      email: 'joao@example.com',
      Progress: {
        create: {
          itemId: 'video1',
          itemStatus: true,
          elementType: ElementType.VIDEO,
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'maria@example.com',
      Progress: {
        create: {
          itemId: 'exercicio1',
          itemStatus: false,
          elementType: ElementType.EXERCICIO,
        },
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
