function pegavalor(botoes){

    let val = botoes.value

    const v = parseInt(val)

    switch(v){
        case 1: console.log("Página 1")
        break
        case 2: console.log("Página 2")
        break
        case 3: console.log("Página 3")
        break
        default: console.log("Nenhuma das opções")
        break
    }
}