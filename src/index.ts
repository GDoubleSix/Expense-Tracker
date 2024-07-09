import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: Number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send({
    hello: "world",
  });
});

app.listen(port, () => {
  console.log("Application running PORT = ", port);
});
