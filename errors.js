function verificaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array Precisa ser do Tipo Object");

    if(typeof num !== 'number') throw new TypeError("Varialvel Precisa ser do Tipo Number");

    if(arr.length !== num ) throw new RangeError("Tamanho inválido");
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("esse erro é um ReferenceError")
            console.log(e.message)
        }else if(e instanceof TypeError){
            console.log("esse erro é um TypeError")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("esse erro é um RangeError")
            console.log(e.message)
        }else{
            console.log("Erro não eseperado: " + e)
        }
    }



}

console.log(verificaArray())