import Server from './server'
import logger from './utils/logger'

const port = process.env.PORT || '4001';

export const server = Server.init(port);

server.start( async() =>{
  logger.info(`🚀 Server is running at PORT: ${process.env.PORT}`);
});
