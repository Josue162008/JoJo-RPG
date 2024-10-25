document.addEventListener('DOMContentLoaded', function () {
  const nome = JSON.parse(localStorage.getItem('nome'));
  const email = JSON.parse(localStorage.getItem('email'));
  const senha = JSON.parse(localStorage.getItem('senha'));
  const idade = JSON.parse(localStorage.getItem('idade'));
  const resultadoDiv = document.getElementById('resultado');
  if (nome && email && senha) {
    resultadoDiv.innerHTML = `
    <h3>Personagem:</h3>
    <p><strong>Nome: </strong> ${nome}</p>
    <p><strong>Idade: </strong> ${idade}</p>
<div class="mudar">
    <button id="mudar" onclick="mudarNome()">Mudar Nome</button>
    <a href="/stand"><button id="mudar">Girar Stand</button></a>
    <button id="mudar">Hamon</button>
    <button id="mudar" onclick="excluir()">Excluir conta</button>
</div>
<div class="divider"></div>
<div class="mudar" id="area">
    <a href="/treinamento"><button id="mudar" class="treinamento">Treinamento</button></a>
    <a href="/biblioteca"><button id="mudar" class="biblioteca">Biblioteca</button></a>
    <a href="/batalha"><button id="mudar" class="batalha">Batalha</button></a>
    <br><br>
    <a href="/loja"><button id="mudar" class="loja">loja</button></a>
    <a href="/missoes"><button id="mudar" class="missoes">Missões</button></a>
    <a href="/trabalho"><button id="mudar" class="trabalho">Trabalho</button></a>
    <br><br>
    <a href="/inventario"><button id="mudar" class="inventario">Inventário</button></a>
</div>
<div class="divider"></div>
<div id="form-personagem">
    <label>Pontos: </label><input type="number" id="pontos" class="status" value="${localStorage.getItem('pontos')}" readonly>
    <label>Stand: </label><input type='text' value="${localStorage.getItem('stand')}" class="status" readonly>
    <br>
    <br>
    <label>Vida: </label> <input type="number" id="vida" value="${localStorage.getItem('vida')}" class="status" readonly><button id="status" onclick="vida()">+</button>
    <label>Vigor: </label><input type="number" id="vigor" value="${localStorage.getItem('vigor')}" class="status" readonly><button onclick="vigor()" id="status">+</button><br>
    <label>Destreza: </label><input type="number" id="destreza" value="${localStorage.getItem('destreza')}" class="status" readonly><button onclick="destreza()" id="status">+</button>
    <label>Agilidade: </label><input type="number" id="agilidade" value="${localStorage.getItem('agilidade')}" class="status" readonly><button onclick="agilidade()" id="status">+</button><br>
    <label>Inteligencia: </label><input type="number" id="inteligenicia" class="status" value="${localStorage.getItem('inteligencia')}" readonly><button onclick="inteligencia()" id="status">+</button>
    <label>Sabedoria: </label><input type="number" id="sabedoria" class="status" value="${localStorage.getItem('sabedoria')}" readonly><button onclick="sabedoria()" id="status">+</button>
</div>
<div class="divider"></div>
    `
  } else {
    resultadoDiv.innerHTML = `
    <h1>NÃO HÁ NADA AQUI!</h1>
    <h1>SUMA DAQUI!</h1>
    <br>
    <img src="/jojo-banner-1">
    `;
  }
});
function mudarNome(){
  var mudarNome = String(prompt("Qual nome?"));
  localStorage.setItem('nome', JSON.stringify(mudarNome));
  location.reload();
};
function excluir(){
  var yn = String(prompt("Deseja mesmo excluir a sua conta? :("));
  if(yn == 'sim' || yn == 'Sim' || yn == 'SIM' || yn == 'S' || yn == 's'){
    const chavesParaRemover = ['nome', 'idade', 'email', 'senha', 'pontos', 'vida', 'agilidade', 'destreza', 'inteligencia', 'sabedoria', 'vigor', 'stand', 'chances']
    chavesParaRemover.forEach(chave => localStorage.removeItem(chave));
    window.location='/cadastro-login'
  }else{
    alert("Ok! ;)");
  }
}
function vida() {
  let vidaAtual = parseInt(localStorage.getItem('vida')) || 0;
  let pontosAtual = parseInt(localStorage.getItem('pontos')) || 0;
  
  if (pontosAtual > 0) {

      vidaAtual += 1;
      pontosAtual -= 1;

      localStorage.setItem('vida', vidaAtual);
      localStorage.setItem('pontos', pontosAtual);

      location.reload();
  } else {
      alert("Você não tem pontos suficientes para aumentar a vida.");
  }
}


function vigor() {
  let vigorAtual = parseInt(localStorage.getItem('vigor')) || 0;
  let pontosAtual = parseInt(localStorage.getItem('pontos')) || 0;
  
  if (pontosAtual > 0) {

      vigorAtual += 1;
      pontosAtual -= 1;

      localStorage.setItem('vigor', vigorAtual);
      localStorage.setItem('pontos', pontosAtual);

      location.reload();
  } else {
      alert("Você não tem pontos suficientes para aumentar o vigor.");
  }
}

function destreza() {
  let destrezaAtual = parseInt(localStorage.getItem('destreza')) || 0;
  let pontosAtual = parseInt(localStorage.getItem('pontos')) || 0;
  
  if (pontosAtual > 0) {

      destrezaAtual += 1;
      pontosAtual -= 1;

      localStorage.setItem('destreza', destrezaAtual);
      localStorage.setItem('pontos', pontosAtual);

      location.reload();
  } else {
      alert("Você não tem pontos suficientes para aumentar a destreza.");
  }
}

function agilidade() {
  let agilidadeAtual = parseInt(localStorage.getItem('agilidade')) || 0;
  let pontosAtual = parseInt(localStorage.getItem('pontos')) || 0;
  
  if (pontosAtual > 0) {

      agilidadeAtual += 1;
      pontosAtual -= 1;

      localStorage.setItem('agilidade', agilidadeAtual);
      localStorage.setItem('pontos', pontosAtual);

      location.reload();
  } else {
      alert("Você não tem pontos suficientes para aumentar o vigor.");
  }
}

function inteligencia() {
  let inteligenciaAtual = parseInt(localStorage.getItem('inteligencia')) || 0;
  let pontosAtual = parseInt(localStorage.getItem('pontos')) || 0;
  
  if (pontosAtual > 0) {

      inteligenciaAtual += 1;
      pontosAtual -= 1;

      localStorage.setItem('inteligencia', inteligenciaAtual);
      localStorage.setItem('pontos', pontosAtual);

      location.reload();
  } else {
      alert("Você não tem pontos suficientes para aumentar a inteligência.");
  }
}

function sabedoria() {
  var sabedoriaAtual = parseInt(localStorage.getItem('sabedoria')) || 0;
  var pontosAtual = parseInt(localStorage.getItem('pontos')) || 0;
  
  if (pontosAtual > 0) {

      sabedoriaAtual += 1;
      pontosAtual -= 1;

      localStorage.setItem('sabedoria', sabedoriaAtual);
      localStorage.setItem('pontos', pontosAtual);

      location.reload();
  } else {
      alert("Você não tem pontos suficientes para aumentar a sabedoria.");
  }
}

var treinamento = document.getElementById('treinar');

function treinar(){

}

var chances = localStorage.getItem('chances') ? parseInt(localStorage.getItem('chances')) : 3;

function sortear() {
  if (chances > 0) {
    chances -= 1;
    localStorage.setItem('chances', chances);

    var standSorteado = Math.floor(Math.random() * (294 - 1 + 1) + 1);
    var resultadoSorteio = document.getElementById('resultado-sorteio');
    var stand;

    if (standSorteado >= 1 && standSorteado <= 50) {
      stand = 'Star Platinum';
    } else if (standSorteado >= 51 && standSorteado <= 100) {
      stand = 'The World';
    } else if (standSorteado >= 101 && standSorteado <= 150) {
      stand = 'Crazy Diamond';
    } else if (standSorteado >= 151 && standSorteado <= 200) {
      stand = 'Killer Queen';
    } else if (standSorteado >= 201 && standSorteado <= 250) {
      stand = 'Gold Experience';
    } else if (standSorteado >= 251 && standSorteado <= 300) {
      stand = 'Sticky Fingers';
    } else if (standSorteado >= 301 && standSorteado <= 350) {
      stand = 'Aerosmith';
    } else if (standSorteado >= 351 && standSorteado <= 400) {
      stand = 'Purple Haze';
    } else if (standSorteado >= 401 && standSorteado <= 450) {
      stand = 'Silver Chariot';
    } else if (standSorteado >= 451 && standSorteado <= 500) {
      stand = 'Hermit Purple';
    } else if (standSorteado >= 501 && standSorteado <= 550) {
      stand = 'Magician\'s Red';
    } else if (standSorteado >= 551 && standSorteado <= 600) {
      stand = 'Hierophant Green';
    } else if (standSorteado >= 601 && standSorteado <= 650) {
      stand = 'The Hand';
    } else if (standSorteado >= 651 && standSorteado <= 700) {
      stand = 'Heaven\'s Door';
    } else if (standSorteado >= 701 && standSorteado <= 750) {
      stand = 'Echoes Act 1';
    } else if (standSorteado >= 751 && standSorteado <= 800) {
      stand = 'Red Hot Chili Pepper';
    } else if (standSorteado >= 801 && standSorteado <= 850) {
      stand = 'Sex Pistols';
    } else if (standSorteado >= 851 && standSorteado <= 900) {
      stand = 'Soft & Wet';
    } else if (standSorteado >= 901 && standSorteado <= 950) {
      stand = 'Tusk Act 1';
    } else if (standSorteado >= 951 && standSorteado <= 1000) {
      stand = 'King Crimson';
    }

    localStorage.setItem('stand', stand);

    resultadoSorteio.innerHTML = `
      <h2>Stand sorteado:</h2> ${stand}
      <h3>Chances: ${chances}</h3>
    `;
  } else {
    alert("Você já perdeu as tuas vezes! Compre chances para poder sortear novamente.");
  }
}