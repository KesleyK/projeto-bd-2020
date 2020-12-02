var formRemove = document.getElementById("formRemoveUser");
var formUpdate = document.getElementById("formUpdateUser");
var formList = document.getElementById("formUsers");
var buttonOcultar = document.getElementById("buttonOcultarUsers");

function getUser() {
  //Função para Pegar Usuário
  fetch("http://localhost:3001/users/findall", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      data.forEach((user) => {
        listUsers(user);
      });
      showButtonHide();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showButtonHide() {
  //Esconder o botão "Listar"
  const button = document.createElement("button");
  const textButton = document.createTextNode("Ocultar");

  button.className = "button";
  button.appendChild(textButton);

  buttonOcultar.appendChild(button);
}

function listUsers(user) {
  //Função para escrever no HTML os usuários
  const nome = document.createElement("dt");
  const textnome = document.createTextNode("Nome: " + user.nome);

  const id = document.createElement("dd");
  const textId = document.createTextNode("Id: " + user.id);

  const inst = document.createElement("dd");
  const textInst = document.createTextNode(
    "Instituição Pertencente: " + user.instituicao_id
  );

  const tipo = document.createElement("dd");
  const textTipo = document.createTextNode("Permissão: " + user.tipo);

  nome.className = "textList nomeListUser";
  nome.appendChild(textnome);

  formList.appendChild(nome);

  id.appendChild(textId);
  id.className = "textList idListUser";

  formList.appendChild(id);

  inst.className = "textList instListUser";
  inst.appendChild(textInst);

  formList.appendChild(inst);

  tipo.className = "textList instListUser";
  tipo.appendChild(textTipo);

  formList.appendChild(tipo);
}

formList.onsubmit = (e) => {
  //Listar Usuários
  e.preventDefault();

  getUser();

  document.getElementById("buttonListarUsers").style.display = "none";
};

formUpdate.onsubmit = (e) => {
  //Atualizar Usuário
  e.preventDefault();

  const formData = {
    nome: document.getElementById("nomeUpdate").value,
    instituicao_id: document.getElementById("instituicaoUpdate").value,
  };

  const id = document.getElementById("idUserUpdate").value;

  fetch("http://localhost:3001/users/update/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

formRemove.onsubmit = (e) => {
  //Remover Usuário
  e.preventDefault();

  const id = document.getElementById("idUserRemove").value;

  fetch("http://localhost:3001/users/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
