import "dotenv/config";
import "reflect-metadata";
import express from "express";
import cors from "express";
import userRoute from "./infastructure/routes";

const port = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());


app.use(userRoute);
app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));
