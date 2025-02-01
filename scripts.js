document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username === "admin" && password === "admin123") {
    alert("Login bem-sucedido!");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
});
