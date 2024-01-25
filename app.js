function performOperation(operation) {
  const inputText = document.getElementById('textInput').value;
  let result = '';

  if (operation === 'encrypt') {
    result = encryptText(inputText);
  } else if (operation === 'decrypt') {
    result = decryptText(inputText);
  }

  const resultTitle = document.getElementById('resultTitle');
  const resultText = document.getElementById('resultText');
  const copyButton = document.getElementById('copyButton');

  resultTitle.innerText = result ? 'Resultado:' : 'Nenhuma mensagem encontrada';
  resultText.innerText = result || 'Digite um texto que você deseja criptografar ou descriptografar.';

  if (result) {
    copyButton.style.display = 'inline-block';
    copyButton.setAttribute('data-clipboard-text', result);
  } else {
    copyButton.style.display = 'none';
  }
}

function encryptText(text) {
  return text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function decryptText(text) {
  return text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function copyText() {
  const resultText = document.getElementById('resultText');
  navigator.clipboard.writeText(resultText.textContent);
  alert('Texto copiado para a área de transferência!');
}
