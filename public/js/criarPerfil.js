const instituicaoID = document.getElementById("idInstituicao");
const typeUser = document.getElementById("typeUser");

var password = document.getElementById("inputPassword"),
  confirm_password = document.getElementById("inputPasswordConfirm"),
  checkerPassword = null;

function validatePassword() {
  //Função para verificar se a confirmação da senha está correta
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
    checkerPassword = null;
  } else {
    confirm_password.setCustomValidity("");
    checkerPassword = 2;
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function logar() {
  window.location.href = "../frontend-2020/entrar.html";
}

function getInstituicao() {
  fetch("http://localhost:3001/institution/findall", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      createOptionInstituicao(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getTypeUser() {
  fetch("http://localhost:3001/usertypes/findall", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      createOptionTypeUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function createOptionTypeUser(types) {
  types.forEach((type) => {
    const node = document.createElement("option");
    const textnode = document.createTextNode(type.tipo);

    node.value = type.id;
    console.log(type.id);
    node.className = "typeUser";
    node.appendChild(textnode);

    typeUser.appendChild(node);
  });
}

function createOptionInstituicao(instituicoes) {
  instituicoes.forEach((instituicao) => {
    const node = document.createElement("option");
    const textnode = document.createTextNode(instituicao.nome);

    node.value = instituicao.id;
    node.className = "typeUser";
    node.appendChild(textnode);

    instituicaoID.appendChild(node);
  });
}

form.onsubmit = (e) => {
  e.preventDefault();

  validatePassword();

  const formData = {
    nome: document.getElementById("txt_nome").value,
    instituicao_id: document.getElementById("idInstituicao").value,
    tipo_usuario_id: document.getElementById("typeUser").value,
    email: document.getElementById("inputEmail").value,
    senha: document.getElementById("inputPassword").value,
  };

  fetch("http://localhost:3001/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error != null) {
        alert("Usuário já cadastrado");
        location.reload();
      } else {
        alert("Cadastro Realizado");
        window.location.href = "entrar.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

getInstituicao();
getTypeUser();
