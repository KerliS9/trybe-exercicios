const fs = require('fs');

function nomeDoArquivo(arquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(arquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = nomeDoArquivo;