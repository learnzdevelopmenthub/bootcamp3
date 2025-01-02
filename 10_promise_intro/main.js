// one way of defining a async function
// function checkOrder() {
//     return new Promise((resolve, reject)=>{
//         let orderId = document.getElementById('input').value

//         if(orderId == 'order123'){
//             resolve("Your Order is Delivered.")
//         } else {
//             reject("Your Order is Cancelled.")
//         }
//     })
// }

// another way of defining async function
async function checkOrder() {
    let orderId = document.getElementById('input').value
    
    if (orderId == 'order123') {
        return "Your Order is Delivered."
    } else {
        throw "Your Order is Cancelled.";
    }
}


document.querySelector('#checkBtn').addEventListener('click', async ()=>{
    // checkOrder().then((success)=>{
    //     document.querySelector('#result').innerHTML = success
    // }).catch((failure)=>{
    //     document.querySelector('#result').innerHTML = failure
    // })

    // another way of handling async function
    try {
        let success = await checkOrder()
        document.querySelector('#result').innerHTML = success
    } catch (error) {
        document.querySelector('#result').innerHTML = error
    }
    
})