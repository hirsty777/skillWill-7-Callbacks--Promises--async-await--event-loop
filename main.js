// //1 .then().catch ==============================================================
// function timeItTakes(delay){
//     return new Promise((resovle)=>{setTimeout(()=>{resovle(delay)},delay*1000)})
// };
// //1 we make toy
// function makeToys(status){
//     return new Promise((resolve, reject)=>{
//         Math.random()>0.1? resolve(`undefected`) : reject(`toy was defected`);
//     });
// };
// //2 we deliver toy
// function deliverToys(status){
//     return new Promise((resolve, reject)=>{
//         Math.random()>0.3? resolve("delivered") : reject("toy was not delivered") 
//     });
// };
// //3 we sell toy 
// function sellToys(status){
//     return new Promise((resolve, reject)=>{
//         Math.random()>0.5? resolve("Toy sold") : reject("Toy did not sell");
// });
// };

// timeItTakes(3)
//     .then(makeDelay=>makeToys())
//     .then(makeStatus=>timeItTakes(2))
//     .then(deliverDelay=>deliverToys())
//     .then(deliverStatus=>timeItTakes(1))
//     .then(sellDelay=>sellToys())
//     .then(sellStatus=>console.log(sellStatus))
//     .catch(err=>console.log(err));



//2 .async/await ==============================================================
function timeItTakes(delay){
    return new Promise(res=>setTimeout(()=>{res(delay)},delay*1000))
};
//1 we make toy
async function makeToys(){
    if(Math.random()>0.1){return `toy was undefected`}
    else{throw new Error("toy was defected")}
};
//2 we deliver toy
async function deliverToys(timeItTakes){
    await timeItTakes
    if(Math.random()>0.3){return `toy was delivered`}
    else{throw new Error("toy was not delivered")}
};
//3 we sell toy 
async function sellToys(timeItTakes){
    await timeItTakes
    if(Math.random()>0.5){return `Toy sold`}
    else{throw new Error("Toy did not sell")}
};
async function toyShop(){
    try{
        const makeStatus = await timeItTakes(2).then(()=>makeToys());
        console.log(makeStatus)
        const deliverStatus = await deliverToys(timeItTakes(2));
        console.log(deliverStatus)
        const sellStatus = await sellToys(timeItTakes(1));
        console.log(sellStatus)
    }catch(error){
        console.log(error)
    }
};
 toyShop()