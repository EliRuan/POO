class Calc {
    private operando1: number
    private operando2: number

    somar(operando1, operando2): number {
        return this.operando1 + this.operando2
    }

    subtrair(operando1, operando2): number {
        return this.operando1 - this.operando2
    }

    constructor(operando1, operando2) {
        this.operando1 = 0
        this.operando2 = 0
    }
}
