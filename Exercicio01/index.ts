class Retangulo {
l1: number = 0;
l2: number = 0;

calcularArea(): number {
return this.l1 * this.l2;
}
calcularPerimetro(): number {
return 2 * (this.l1 + this.l2);
}

}