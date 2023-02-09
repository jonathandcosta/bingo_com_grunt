document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form_sorteador")
    .addEventListener("submit", function (evento) {
      evento.preventDefault();
      let numero_maximo = document.getElementById("numero_maximo").value;
      numero_maximo = parseInt(numero_maximo);

      let numeroAleatorio = Math.random() * numero_maximo;
      numeroAleatorio = Math.floor(numeroAleatorio + 1);
      document.getElementById("resultado_valor").innerText = numeroAleatorio;
      document.querySelector(".resultado").style.display = "block";
    });
});
