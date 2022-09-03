import app from '../../app';
import { connectDb } from '../clients/prisma';
import userRoute from "../../user/infastructure/routes";
import logger from '../utils/logger';

export default class Server {
  public port: string;

  constructor(port: string) {
    this.port = port;
  }

  static init(port: string) {
    return new Server(port);
  }

  start(callback: () => void) {
    try {
      this.connect().then();
      
      app.get('/', async (req: any, res: any) => {
        res.send({status: "ok"})
      })

      app.use(userRoute);
      app.listen(this.port, () => console.log(`Listo por el puerto ${this.port}`));
      
      callback();
    } catch (err) {
      logger.error(err)
    }
  }

  private async connect() {
    return await connectDb();
  }
}
