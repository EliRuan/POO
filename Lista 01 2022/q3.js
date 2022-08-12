var valor1;
var valor2;
var valor3;

valor1 = Number(window.prompt('Digite o 1º número: '));
valor2 = Number(window.prompt('Digite o 2º número: '));
valor3 = Number(window.prompt('Digite o 3º número: '));

var maior = Math.max(valor1, valor2, valor3);
var menor = Math.min(valor1, valor2, valor3);

window.alert('O maior número é ' + maior);
window.alert('O menor número é ' + menor);
