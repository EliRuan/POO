function Primo(numero: number)
{
    let primo: boolean = true
    let contador: number = 2
    for (contador; contador < numero; contador++){ 
        if (numero % contador == 0)
        {
            primo = false
            break  
        }
    }
    if (primo == true && numero != 1){
        console.log(numero + " é primo")
        
    }
    else{
        console.log(numero + " não é primo")
    }

}

Primo(29)
