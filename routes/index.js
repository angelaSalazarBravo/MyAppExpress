// routes/index.js
import express from "express";
const router = express.Router();
import { multiplicar } from "../helpers/multiplicar.js";

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/multiplicar", async (req, res) => {
  const base = parseInt(req.body.base);
  const resultado = await multiplicar(base);
  res.render("multiplicar", { base, resultado });
});

export { router as indexRouter };
