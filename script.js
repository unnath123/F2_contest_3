function orderPrep(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({"orderstatus":true,"paid":false});
        }, 1500);
    })
}

let promise=orderPrep();

promise.then((data)=>{
    console.log(data.orderstatus);
})