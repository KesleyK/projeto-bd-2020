var password = document.getElementById("inputPassword"),
  confirm_password = document.getElementById("inputPasswordConfirm"),
  checkerPassword = null;
var form = document.getElementById("form");

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

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = {
    nome: document.getElementsByName("inputName")[0].value,
    instituicao_id: 29,
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
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
