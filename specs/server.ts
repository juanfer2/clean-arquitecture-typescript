import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import userRoute from '../src/user/infastructure/routes'

const app = express();
app.use(express.json());

app.get('/', async (req: any, res: any) => {
  res.send({status: "ok"})
})

app.use(userRoute);

// app.listen('4008', (): void => {
//   console.log('run server')
// });

export default app;
