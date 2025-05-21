const minFontSize = 12; // tamanho mínimo em px
const maxFontSize = 24; // tamanho máximo em px
let currentFontSize = 16; // tamanho inicial em px

function aplicarFonte() {
  document.documentElement.style.fontSize = currentFontSize + 'px'; // altera font-size do <html>
}

function aumentarFonte() {
  if (currentFontSize < maxFontSize) {
    currentFontSize += 2;
    aplicarFonte();
  }
}

function diminuirFonte() {
  if (currentFontSize > minFontSize) {
    currentFontSize -= 2;
    aplicarFonte();
  }
}

function alternarContraste() {
  document.body.classList.toggle('high-contrast');
}

// Inicializa com o tamanho padrão
aplicarFonte();
