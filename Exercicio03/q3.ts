function Saudacao(nome: string, pronome?: string){
    if (pronome == null)
    {
        console.log('Senhor(a) ' + nome)
    }
    else{
        console.log(pronome + nome)
    }
    
}
Saudacao("Sávia")  // Senhor(a) Sávia
