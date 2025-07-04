const users = [
  { username: "ELIAS", password: "Casadoelias", id: 1001, status: "Líder do PCC" },
  { username: "Weroi827", password: "826", id: 1002, status: "Soldado" },
  { username: "Enzosapolino", password: "123a68oO1", id: 1003, status: "Soldado" },
  { username: "rato", password: "olheiro202", id: 1004, status: "Olheiro" },
];

function login() {
  const usernameInput = document.getElementById("username").value.trim().toLowerCase();
  const passwordInput = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const user = users.find(
    u => u.username === usernameInput && u.password === passwordInput
  );

  if (user) {
    // Login ok
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("user-id").innerText = user.id;
    document.getElementById("user-name").innerText = user.username;
    document.getElementById("user-status").innerText = user.status;

    message.innerText = "";
  } else {
    // Login inválido
    message.style.color = "#ff4d4d";
    message.innerText = "Usuário ou senha incorretos!";
  }
}

function logout() {
  document.getElementById("login-panel").style.display = "block";
  document.getElementById("dashboard").style.display = "none";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").innerText = "";
}