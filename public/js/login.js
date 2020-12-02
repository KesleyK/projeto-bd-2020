var form = document.getElementById("form");
var divLogin = document.getElementById("infoLogin");
var buttonSair = document.getElementById("infoLogin");

verifLog();

async function verifLog() {
  //Verifica se está logado e mostra as informações do login
  const verifLog = localStorage.getItem("userId");
  if (verifLog != null) {
    await fetch("http://localhost:3001/users/findone/" + verifLog, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("nome", data.nome);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id_instituicao", data.instituicao_id);
        localStorage.setItem("typerUserById", data.tipo);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    document.getElementById("form").style.display = "none";

    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");
    const tipo_usuario_id = localStorage.getItem("typerUserById");

    const nameUser = document.createElement("p");
    const textNameUser = document.createTextNode(nome);

    nameUser.className = "nameUser";
    nameUser.appendChild(textNameUser);

    divLogin.appendChild(nameUser);

    const emailUser = document.createElement("p");
    const textEmailUser = document.createTextNode(email);

    emailUser.className = "emailUser";
    emailUser.appendChild(textEmailUser);

    divLogin.appendChild(emailUser);

    const typerUser = document.createElement("p");
    const textTypeUser = document.createTextNode(tipo_usuario_id);

    typerUser.className = "typerUser";
    typerUser.appendChild(textTypeUser);

    divLogin.appendChild(typerUser);

    const button = document.createElement("button");
    const textButton = document.createTextNode("Sair");

    button.onclick = function logout() {
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      localStorage.removeItem("typerUserById");
      localStorage.removeItem("id_instituicao");
      alert("Deslogado");
      location.reload();
    };
    button.className = "button";
    button.appendChild(textButton);

    buttonSair.appendChild(button);
  }
}

function crialPerfil() {
  window.location.href = "../public/perfil.html";
}

form.onsubmit = (e) => {
  //Realizar Login
  e.preventDefault();

  const formData = {
    email: document.getElementById("txt_email").value,
    senha: document.getElementById("password").value,
  };
  fetch("http://localhost:3001/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error == null) {
        localStorage.setItem("userId", data.userId);
        verifLog();
      } else {
        alert("Falha ao realizar login");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// const cat = localStorage.getItem('userId');
// localStorage.removeItem('userId');
