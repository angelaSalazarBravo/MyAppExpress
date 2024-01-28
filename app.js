import express from "express";
import http from "http";
import { multiplicar } from "./helpers/multiplicar.js";
import { indexRouter } from "./routes/index.js";
import { Server } from "socket.io";
import { generarQuiniela } from "./routes/generar-quiniela.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/multiplicar", async (req, res) => {
  const base = parseInt(req.body.base);
  const resultado = await multiplicar(base);
  res.render("multiplicar", { base, resultado });
});

app.use("/", indexRouter);

io.on("connection", (socket) => {
  console.log("connection");

  socket.on("generarQuiniela", () => {
    const quiniela = generarQuiniela();
    socket.emit("quinielaGenerada", quiniela);
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});

app.get("/generar-quiniela", (req, res) => {
  res.render("generar-quiniela");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
