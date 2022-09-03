import "dotenv/config";
import morgan from "morgan";
import express, { Request, Response } from "express";
import cors from "express";
import logger, {stream} from './common/utils/logger'
import { logErrors, clientErrorHandler, errorHandler } from './common/middlewares/error.middleware'

const app = express();
const LOG_FORMAT: any = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" STATUS=:status :res[content-length] ":referrer" ":user-agent"';

app.use(cors());
app.use(express.json());
app.use(morgan(LOG_FORMAT, { stream }));
app.use(logErrors);
app.use(clientErrorHandler);


export default app;
