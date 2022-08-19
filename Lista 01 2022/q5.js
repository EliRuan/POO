var n1
var n2
var maior
var menor

n1 = Number(window.prompt('Digite o 1º número: '))
n2 = Number(window.prompt('Digite o 2º número: '))

var maior = Math.max(n1, n2)
var menor = Math.min(n1, n2)

for(var maior; menor <= maior; menor++)
window.alert(Math.floor(menor))
