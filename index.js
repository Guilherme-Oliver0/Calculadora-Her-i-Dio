let rankeadas = saldoRanqueadas(85,33)



function saldoRanqueadas(vitorias, derrotas){
    let soma = vitorias - derrotas


    if(soma <= 10){
        console.log("O Herói tem saldo de " + soma + " está no nivel de FERRO")

    }else if(soma >= 11 && soma <= 20){
        console.log("O Herói tem saldo de " + soma + " está no nivel de BRONZE")

    }else if(soma >= 21 && soma <= 50){
        console.log("O Herói tem saldo de " + soma + " está no nivel de PRATA")

    }else if(soma >= 51 && soma <= 80){
        console.log("O Herói tem saldo de " + soma + " está no nivel de OURO")

    }else if(soma >= 81 && soma <= 90){
        console.log("O Herói tem saldo de " + soma + " está no nivel de DIAMANTE")

    }else if(soma >= 91 && soma <= 100){
        console.log("O Herói tem saldo de " + soma + " está no nivel de LENDÁRIO")

    }else if(soma >= 101){
        console.log("O Herói tem saldo de " + soma + " está no nivel de IMORTAL")

    }

    return soma
    

    
    
}