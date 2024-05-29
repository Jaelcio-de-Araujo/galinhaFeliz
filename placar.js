document.addEventListener("DOMContentLoaded", function () {
   const canvas = document.querySelector(".myCanvas");
   const h2 = document.querySelector("h2");
   const ctx = canvas.getContext("2d");
   let pontos = 0;

   canvas.addEventListener("click", function (event) {
      pontos++;
      h2.textContent = "Total de Pontos: " + pontos;
   });
});