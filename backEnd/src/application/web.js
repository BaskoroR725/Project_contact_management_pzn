import express from "express";
import cors from "cors";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";

export const web = express();

web.use(cors({ origin: "http://localhost:5173" })); // ganti ke asal frontend kamu

web.use(express.json());

web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);
