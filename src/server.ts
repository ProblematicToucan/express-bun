import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

export const app = express();
const port = parseInt(Bun.env.APP_PORT || '3000', 10);

app.use(cors({
    credentials: true
}))
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).send({message: "Hello World"});
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/ 🚀`);
});
