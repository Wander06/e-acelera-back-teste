import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'stephany@example.com',
    },
  });

  // Criando um progresso
  await prisma.progress.create({
    data: {
      itemId: 'abc123',
      itemStatus: true,
      elementType: 'VIDEO', 
      userId: user.id,
    },
  });

  console.log('Dados inseridos com sucesso! ');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
