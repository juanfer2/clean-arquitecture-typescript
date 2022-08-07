import "dotenv/config";
import "reflect-metadata";
import express from "express";
import cors from "express";
import userRoute from "./infastructure/routes";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4001;

app.use(userRoute);
app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));
