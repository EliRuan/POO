class Conta {
    constructor(private _numero: string, private _saldo: number) {}
        
    get numero(): string {
        return this._numero;
    }

    set numero(numero: string) {
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this.saldo = saldo;
    }   
}
