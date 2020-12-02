const mainBox = document.getElementById("boxChat");
const buttonEntrar = document.getElementById("buttonLoginForum");

function loadPage() {
  const idUser = localStorage.getItem("userId");

  fetch("http://localhost:3001/message/findall", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        appendUsernameMessage(item);
      });

      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  if (idUser == null) {
    document.getElementById("barSendMessage").style.display = "none";

    const labelButton = document.createElement("label");
    const textLabelButton = document.createTextNode(
      "Entre para poder enviar uma mensagem!"
    );

    labelButton.className = "textLabel";
    labelButton.appendChild(textLabelButton);

    buttonEntrar.appendChild(labelButton);

    const button = document.createElement("button");
    const textButton = document.createTextNode("Entrar");

    button.onclick = function logout() {
      location.href = "entrar.html";
    };
    button.className = "button";
    button.appendChild(textButton);

    buttonEntrar.appendChild(button);
  }
}

function createDivMessage() {
  const node = document.createElement("div");

  node.id = "DivMensagemUsuario";
  node.className = "DivMessage";

  mainBox.appendChild(node);
}

async function appendUsernameMessage(item) {
  const idUser = localStorage.getItem("userId");

  const user_name = item.nome_usuario;

  const node = document.createElement("p");
  const textnode = document.createTextNode(user_name);

  node.className =
    parseInt(idUser) !== item.usuario_id || !idUser
      ? "username"
      : "usernameSend";
  node.appendChild(textnode);

  mainBox.appendChild(node);

  const message = document.createElement("p");
  const textMessage = document.createTextNode(item.text_msg);

  message.className =
    parseInt(idUser) !== item.usuario_id || !idUser ? "message" : "messageSend";
  message.appendChild(textMessage);

  mainBox.appendChild(message);
}

function enviarMensagem() {
  //Cadastrar nova mensagem nofórum

  const formData = {
    text_msg: document.getElementById("txt_message").value,
    usuario_id: localStorage.getItem("userId"),
    instituicao_id: localStorage.getItem("id_instituicao"),
  };
  fetch("http://localhost:3001/message/create", {
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
}

loadPage();
