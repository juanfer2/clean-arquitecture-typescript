import "dotenv/config";
import { InversifyExpressServer } from 'inversify-express-utils';
import express from "express";
import cors from "express";
import container from "./inversify.config";

const port = process.env.PORT || 3001;
const server = new InversifyExpressServer(container);
const app = server.build();

app.use(cors());
app.use(express.json());

app.get('/', async (req: any, res: any) => {
  res.send({status: "ok"})
})

//app.use();

// dbInit().then();
app.listen(port, () => console.log(`Listo por el puerto ${port}`));
