document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCadastro");
  const submitBtn = document.getElementById("cadastro");
  const inputs = form.querySelectorAll("input");

  function verificarCamposPreenchidos() {
    let todosPreenchidos = true;

    inputs.forEach(function (input) {
      if (input.value === "") {
        todosPreenchidos = false;
      }
    });
    submitBtn.disabled = !todosPreenchidos;
  }
  submitBtn.addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var idade = document.getElementById("idade").value;

    var storedNome = JSON.parse(localStorage.getItem("nome"));
    var storedEmail = JSON.parse(localStorage.getItem("email"));
    var storedSenha = JSON.parse(localStorage.getItem("senha"));
    var storedIdade = JSON.parse(localStorage.getItem("idade"));
    if (nome === storedNome && email === storedEmail && senha === storedSenha && idade === storedIdade){

        window.location = "/home";
        
    } else if (idade > 90 && senha < 8) {
      const senhaResultado = document.getElementById("senhaResultado");
      const resultado = document.getElementById("resultado-idade");
      resultado.innerHTML = `
          <p>Idade muito alta!</p>
        `;
      senhaResultado.innerHTML = `
          <p>Cadê os 8 caracteres?</p>
        `;
    } else {
      localStorage.setItem("nome", JSON.stringify(nome));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("senha", JSON.stringify(senha));
      localStorage.setItem("idade", JSON.stringify(idade));
      localStorage.setItem("vida", JSON.stringify(100));
      localStorage.setItem("pontos", JSON.stringify(12));
      localStorage.setItem("vigor", JSON.stringify(0));
      localStorage.setItem("destreza", JSON.stringify(0));
      localStorage.setItem("agilidade", JSON.stringify(0));
      localStorage.setItem("inteligencia", JSON.stringify(0));
      localStorage.setItem("sabedoria", JSON.stringify(0));

      window.location = "/home";
    }
  });

  inputs.forEach(function (input) {
    input.addEventListener("input", verificarCamposPreenchidos);
  });
});


function login(){
  var email = JSON.parse(localStorage.getItem('email'));
  var senha = JSON.parse(localStorage.getItem('senha'));

  if(email && senha){
    alert(`Login efetuado! Seja muito bem-vindo ${email}.`)
    window.location = '/home'
  }else{
    alert('Login não efetuado!')
  }
}