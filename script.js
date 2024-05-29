window.onload = function () {
   // Obter o canvas e o contexto
   const canvas = document.querySelector(".myCanvas");
   const context = canvas.getContext("2d");

   // Carregar a imagem da galinha
   const img = new Image();
   img.src = "./assets/galinha-semfundo.png";

   // Carregar a imagem do ovo
   const egg = new Image();
   egg.src = "./assets/ovosenfundo.png";

   // Variáveis para armazenar a posição da galinha
   let chickenX = 50;
   let chickenY = 50;
   const chickenWidth = 90;
   const chickenHeight = 90;

   // Array para armazenar as posições dos ovos
   const eggs = [];

   // Função para desenhar a galinha na posição atual
   function drawChicken(x, y) {
      // Limpar o canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar a galinha na nova posição
      context.drawImage(img, x, y, chickenWidth, chickenHeight);

      // Desenhar todos os ovos
      eggs.forEach(function (eggPosition) {
         context.drawImage(egg, eggPosition.x, eggPosition.y, 30, 30);
      });
   }

   // Atualizar a posição da galinha com o movimento do mouse
   canvas.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();
      chickenX = event.clientX - rect.left - chickenWidth / 2;
      chickenY = event.clientY - rect.top - chickenHeight / 2;
      drawChicken(chickenX, chickenY);
   });

   // Capturar o clique e desenhar um ovo se o clique estiver na galinha
   canvas.addEventListener("click", function (event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Verificar se o clique está dentro dos limites da galinha
      if (
         mouseX >= chickenX &&
         mouseX <= chickenX + chickenWidth &&
         mouseY >= chickenY &&
         mouseY <= chickenY + chickenHeight
      ) {
         // Adicionar a posição do ovo ao array de ovos
         eggs.push({ x: chickenX, y: chickenY });
         drawChicken(chickenX, chickenY);
      }
   });

   // Desenhar a galinha quando a imagem estiver carregada
   img.onload = function () {
      drawChicken(chickenX, chickenY);
   };
};