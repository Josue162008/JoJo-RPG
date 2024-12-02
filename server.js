const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;
const http = require('http');
const server = new http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: `http://localhost:${PORT}/cadastro-login`,
        methods: ["GET", "POST"]
    }
});
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'src')));
//----------------------SOCKET.IO--------------------------------------
io.on('connection', (socket) => {-
    console.log('Um usuário se conectou');
  
    socket.on('disconnect', () => {
      console.log('Um usuário se desconectou');
    });
  });
//-----------------------HTML-------------------------------------------
app.get('/cadastro-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'home.html'));
});
app.get('/batalha', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'batalha.html'));
});
app.get('/biblioteca', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'biblioteca.html'));
});
app.get('/inventario', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'inventario.html'));
});
app.get('/loja', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'loja.html'));
});
app.get('/missoes', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'missoes.html'));
});
app.get('/trabalho', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'trabalho.html'));
});
app.get('/treinamento', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'pages', 'html', 'treinamento.html'));
});
app.get('/stand', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'html', 'stand.html'))
});

//-----------------------STYLE------------------------------------------
app.get('/main-css', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'main.css'));
});
app.get('/style-um', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'css', 'style-um.css'));
});
app.get('/style-dois', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'css', 'style-dois.css'));
});
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'main.css'));
});

//----------------------JAVASCRIPT E JSON-------------------------------
app.get('/informacoes-usuario', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'js', 'informacoes-usuario.js'));
});
app.get('/batalha-js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'js', 'batalha.js'));
});
app.get('/main-js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'js', 'main.js'));
});
app.get('/stands-js', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'js', 'stand.js'));
});
app.get('/stands-json', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src', 'json', 'stand.json'));
});
app.get('/dados', (req, res)=>{
    res.sendFile(path.join(__dirname, 'json', 'dados_python.json'));
});

const caminhoBanco = '/json/dados.json';

function lerBanco() {
    try {
      const dados = fs.readFileSync(caminhoBanco, "utf8");
      return JSON.parse(dados);
    } catch (erro) {
      console.error("Erro ao ler o banco de dados:", erro);
      return null;
    }
  }
  
  app.get("/usuarios", (req, res) => {
    const banco = lerBanco();
    if (banco) {
      res.json(banco.usuarios);
    } else {
      res.status(500).send("Erro ao acessar o banco de dados");
    }
  });


//----------------------IMAGENS-E-VIDEOS--------------------------------
app.get('/icon-killer-queen', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'img', 'icon-killer-queen.jpg'));
});
app.get('/weather-report-weather-jjba', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'weather-report-weather-jjba.gif'));
});
app.get('/jonathan-joestar-sunlight', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'jonathan-joestar-sunlight-yellow-overdrive.gif'));
});
app.get('/dio-vs-jotaro', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'dio-vs-jotaro.gif'));
});
app.get('/loja-pet-shop', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'loja-pet-shop.gif'));
});
app.get('/polnareff', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'polnareff.gif'));
});
app.get('/bruno-bucharatti-giorno-giovanna', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'bruno-bucharatti-giorno-giovanna.gif'));
});
app.get('/jojo-banner-3', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'jojo-banner-3.gif'));
});
app.get('/jojo-banner-1', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'banner-jojo-1.jpg'));
});
app.get('/jojo-wallpaper', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'jojo-wallpaper-3.jpg'));
});
app.get('/wallpaper-gif', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'wallpaper.gif'));
});
app.get('/jojo-sticker-gif-1', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src', 'img', 'gif', 'sticker-gif-1.gif'));
});
//-----------------------OUTRAS COISAS DO NODE.JS-----------------------
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/cadastro-login`);
});