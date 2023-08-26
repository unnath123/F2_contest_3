//getMenu function

function getMenu(){
    let promise1=fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    promise1.then((p1data=>{
        const p1response=p1data.json();
        p1response.then((p1data2)=>{
            const arr=p1data2;//array with all objects

            const mainblock=document.getElementById("main-blockb1");

            for(let i=0;i<12;i++){
                let cardblockb1=document.createElement("div");
                cardblockb1.classList.add("card-block");

                let cardimage=document.createElement("img");
                cardimage.src=arr[i].imgSrc;
                cardimage.classList.add("burger1");

                let carddesc=document.createElement("div");
                carddesc.classList.add("card-desc");

                let desc=document.createElement("p");
                desc.innerText=arr[i].name;

                let addimage=document.createElement("img");
                addimage.src="./images/Group 4.png";

                let price=document.createElement("p");
                price.innerText="$"+arr[i].price;

                carddesc.append(desc,addimage);

                cardblockb1.append(cardimage,carddesc,price);

                mainblock.appendChild(cardblockb1);
            }
        }).catch((e)=>{
            console.log("error observed");
        })
    }))
}

//getMenu();

//takeorder function 
function TakeOrder() {
    const apiUrl = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    //const burgers = data.burgers;

                    // Randomly select 3 burgers
                    const selectedBurgers = [];
                    for (let i = 0; i < 3; i++) {
                        const randomIndex = Math.floor(Math.random() * data.length);
                        selectedBurgers.push(data[randomIndex]);
                    }

                    const order = {
                        burgers: selectedBurgers,
                        order_status: true
                    };

                    resolve(order);
                })
                .catch(error => {
                    reject(error);
                });
        }, 2500);
    });
}

//function orderPrep
function orderPrep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const obj1={
                order_status:true,
                paid:false
            }
            resolve(obj1);
        }, 1500);
    })
}

//function payorder
function payOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({order_status:true,
                paid:true});
        }, 1000);
    })
}

function thankyouFnc() {
    alert("Thank you for ordering food, Enjoy your declicious food");
}


window.onload=()=>{
    invoke_this();
   async function invoke_this(){
        getMenu();
        let x= await TakeOrder();
        console.log(x);

        let y= await orderPrep();
        console.log(y);

        let z= await payOrder();
        console.log(z);

        let z1= thankyouFnc();
        
       
   }

}