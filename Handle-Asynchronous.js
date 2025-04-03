// let a = 10;
//             b = 0;
//             setTimeout(() => {
//                 b = 20;
//             },2000)
//             console.log(a+b);
// output : 10 (kuki yeh gap lega 2 sec ka ) 

// Let see how to hanlde this 
// we can use promise function to resolve this problem of asynchronous operations

let a = 10;
let waitingData = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20)
    },2000)
})

waitingData.then((data) => {
    b = data;
    console.log(a+b);
})

