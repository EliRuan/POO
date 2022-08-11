var brl;
var btc;
var cotacao;

brl = Number(window.prompt('Digite um valor em Reais: R$ '));
btc = 126000;
cotacao = brl / btc;

window.alert('Valor em BTC: ' + cotacao.toFixed(8));
