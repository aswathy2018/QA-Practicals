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



function prime(num){
    if(num<2){
        return false
    }
    
    for(let i=2 ; i*i<=num ; i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

function finding(arr){
    let isPrime = []
    // let sum = 0
    
    for(let i=0 ; i<arr.length ; i++){
        if(prime(arr[i])){
            isPrime.push(arr[i])
            // sum+=arr[i]
        }
    }
    
    // return sum
    return isPrime
}

console.log(finding([1,2,3,4,5,6,7,8,9]))
