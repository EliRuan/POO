class Hora {

    constructor(private hora: number, private minutos: number, private segundos: number) {
    }

    ler_hora(hora): void {
        let nova_hora = prompt('Digite a hora: ')
        nova_hora = new hora()
        console.log(nova_hora);

    }

    ler_minutos(minutos): void {
        let novo_minuto = prompt('Digite os minutos: ')
        novo_minuto = new minutos()
        console.log(novo_minuto);
    }

    ler_segundos(segundos): void {
        let novo_segundo = prompt('Digite os segundos: ')
        novo_segundo = new segundos()
        console.log(novo_segundo);
    }

    exibir_hora(nova_hora, novo_minuto, novo_segundo): void {
        console.log(nova_hora + ":" + novo_minuto + ":" + novo_segundo);

    }
}
