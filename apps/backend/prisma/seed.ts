import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://admin:admin@localhost:5432/db_artesanato',
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedSenha = await bcrypt.hash('admin123', 10);

  await prisma.administrador.upsert({
    where: { email: 'admin@artesanato.com' },
    update: {},
    create: {
      nome: 'Administrador',
      email: 'admin@artesanato.com',
      senha: hashedSenha,
    },
  });

  console.log('Seed concluído: Administrador criado com email admin@artesanato.com');
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
