import express from "express";
import cors from "cors";
import ProdukRoute from "./routes/ProdukRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProdukRoute);

app.listen(5000, ()=> console.log('Server up and running...'));