class Banco {
    constructor(private contas: Conta[] = [];) {}
    
    inserir(c : Conta): void {}
    alterar(c : Conta): void {}
    consultar(private numero: String): Conta {}
    excluir(numero: String): void {}
    depositar(numero: String, valor: number): void {}
    sacar(numero: String, valor: number): void {}
    consultarSaldo(numero: String): number {}
    transferir(numeroCredito: String,
    numeroDebito:String,
    valor: number): void {}
    
    
    }
