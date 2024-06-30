import { dbConnect } from "./db.js";
import express, { json } from "express";
import cors from "cors";
import productRouter from "./routers/products.js";

await dbConnect();
console.log("Connected to DB");

const app = express();
app.use(cors());
app.use(json());

app.use("/products", productRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
