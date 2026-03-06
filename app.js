const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let estado = {
  rele1: 0,
  rele2: 0,
  rele3: 0,
  rele4: 0
};

app.get("/", (req,res)=>{
  res.send("API Relés funcionando")
});

app.get("/estado",(req,res)=>{
  res.json(estado)
});

app.get("/rele/:id/on",(req,res)=>{
  estado["rele"+req.params.id] = 1
  res.send("Ligado")
});

app.get("/rele/:id/off",(req,res)=>{
  estado["rele"+req.params.id] = 0
  res.send("Desligado")
});

app.listen(3000, ()=>{
  console.log("Servidor rodando na porta 3000")
});