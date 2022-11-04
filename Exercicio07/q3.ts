class Calc {
    operando1: number
    operando2: number

    somar(operando1, operando2): number {
        return this.operando1 + this.operando2
    }

    constructor(operando1, operando2) {
        this.operando1 = 0
        this.operando2 = 0
    }
}

class CalcCientifica extends Calc{
    exponenciar(operando1, operando2): number{
        return this.operando1 ** this.operando2
    }  
}

// PARA SE UTILIZAR OS ATRIBUTOS DA CLASSE CALC NA CLASSE CALCCIENTIFICA PODE-SE TIRAR O PRIVATE DOS ATRIBUTOS.
