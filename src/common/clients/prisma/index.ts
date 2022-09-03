import { PrismaClient } from '@prisma/client';
import logger from '../../utils/logger'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
});

export const connectDb = async () => {
  try {
    await prisma.$connect();
    logger.info(`conexion with database succesfully`);
  } catch (error) {
    logger.error(error);
  }
}

export const { user: UserPrisma } = prisma;
export default prisma;
