import { PrismaClient } from '@prisma/client';
import logger from '../../utils/logger'

const logs = [{
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
}
]

const loggerInfo: any = process.env.NODE_ENV === 'test' ? [] : logs;

const prisma = new PrismaClient({
  datasources: {
    db: { url: process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL },
  },
  errorFormat: 'pretty',
  log: loggerInfo
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
