class Circulo {

raio: number = 0;

calcularArea(): number {

return (this.raio*this.raio) * 3.14;
}

calcularPerimetro(): number {
return (2 * 3.14) * this.raio;
}

}

let circulo: Circulo;
circulo = new Circulo();
circulo.raio = 3;

console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
