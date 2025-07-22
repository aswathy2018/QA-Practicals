// function isPrime(num){
//     if(num<2){
//         return false
//     }

//     for(let i=2 ; i*i<num ; i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }

// function square(arr){
//     for(let i=0 ; i<arr.length ; i++){
//         if(isPrime(arr[i])){
//             arr[i]=arr[i]*arr[i]
//         }
//     }
//     let index = 0
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i]%2!==0){
//             arr[index]=arr[i]
//             index++
//         }
//     }
//     arr.length=index
//     return arr
// }



// console.log(square([1,2,3,4,5,6,7,8]));



function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
}

findPrimes([1, 2, 3, 4, 5, 6, 7, 9, 11, 15, 17]);
