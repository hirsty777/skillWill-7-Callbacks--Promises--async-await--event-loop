function makeToy(){
    return new Promise((resolve, reject)=>{
        if(Math.random()>0.1){
            resolve("Made toy was undefected")
        }else{
            reject("Made toy was defected")
        }
    })
}

makeToy()
        .then(res=>console.log(res))
        .catch(err=>console.log(err))