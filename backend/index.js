import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Koursely Server running"));

app.listen(port, () => console.log(`app listening on port: ${port}`));
