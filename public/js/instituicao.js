var form = document.getElementById("form");
var formUpdate = document.getElementById("formUpdate");
var formList = document.getElementById("formList");
var buttonRemove = document.getElementById("buttonRemove");
var buttonOcultar = document.getElementById("buttonOcultar");

function deleteInstituicaoById(id) {
  //Deleta a instituicao
  const loggedUserInstitution = localStorage.getItem("id_instituicao");

  fetch("http://localhost:3001/institution/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (id === loggedUserInstitution) {
        logout();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

form.onsubmit = (e) => {
  //Cadastrar nova Instituição
  e.preventDefault();

  const formData = {
    cnpj: document.getElementById("cnpj").value,
    nome: document.getElementById("nome").value,
  };
  fetch("http://localhost:3001/institution/create", {
    method: "POST",
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

formUpdate.onsubmit = (e) => {
  //Atualizar Instituição
  e.preventDefault();

  const formData = {
    cnpj: document.getElementById("cnpjUpdate").value,
    nome: document.getElementById("nomeUpdate").value,
  };

  const id = document.getElementById("id").value;

  fetch("http://localhost:3001/institution/update/" + id, {
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
  //Remover Instituição
  e.preventDefault();

  const id = document.getElementById("idRemove").value;

  deleteInstituicaoById(id);
};

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
      data.forEach((instituicao) => {
        listIntituicoes(instituicao);
      });
      showButtonHide();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showButtonHide() {
  const button = document.createElement("button");
  const textButton = document.createTextNode("Ocultar");

  button.className = "button";
  button.appendChild(textButton);

  buttonOcultar.appendChild(button);
}

function listIntituicoes(instituicoes) {
  const nome = document.createElement("dt");
  const textnome = document.createTextNode("Nome: " + instituicoes.nome);

  const cnpj = document.createElement("dd");
  const textcnpj = document.createTextNode("CNPJ: " + instituicoes.cnpj);

  const id = document.createElement("dd");
  const textId = document.createTextNode("ID: " + instituicoes.id);

  nome.className = "textList nomeListInst";
  nome.appendChild(textnome);

  formList.appendChild(nome);

  cnpj.appendChild(textcnpj);
  cnpj.className = "textList cnpjListInst";

  formList.appendChild(cnpj);

  id.className = "textList idListInst";
  id.appendChild(textId);

  formList.appendChild(id);
}

formList.onsubmit = (e) => {
  e.preventDefault();

  getInstituicao();

  document.getElementById("buttonListar").style.display = "none";
};

function logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  localStorage.removeItem("typerUserById");
  localStorage.removeItem("id_instituicao");
  alert("Deslogado");
  location.reload();
}
