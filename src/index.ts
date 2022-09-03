import Server from './common/server'
import logger from './common/utils/logger'

const port = process.env.PORT || '4001';

export const server = Server.init(port);

server.start( async() =>{
  logger.info(`🚀 Server is running at PORT: ${process.env.PORT}`);
});
