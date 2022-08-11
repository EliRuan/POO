var numero;
var antecessor;
var sucessor;

numero = Number(window.prompt('Digite um número: '));

antecessor = numero - 0.1;
sucessor = numero + 0.1;

window.alert('Antecessor: ' + antecessor.toFixed(1));
window.alert('Sucessor: ' + sucessor.toFixed(1));
