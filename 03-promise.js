function prepararPedido(){
    return new Promise((resolve, reject)=>{
        temPao = false;
        setTimeout(()=>{
            if(temPao === true){
            resolve("Hambúrguer pronto!");
            }else{
                reject(new Error ("Hambúrguer pronto!"));
            }

        },2000)
    });
}

prepararPedido().then((resultado)=>{
    console.log(resultado)
}).catch((erro) =>{
    console.error(erro.message)
});