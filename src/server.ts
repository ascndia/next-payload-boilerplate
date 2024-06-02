import { NextHandler, nextApp } from "./next-utils";
import express from "express";
import payload from "payload";

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3000;

const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET as string,
    express: app,
  });

  app.use((req, res) => NextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT);
  });
};

start();
