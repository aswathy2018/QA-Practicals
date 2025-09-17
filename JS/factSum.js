function factorial(num){
    fact = 1

    for(let i=1 ; i<=num ; i++){
        fact*=i
    }
    return fact
}

function sum(n){
    let sum = 0

    for(let i=1 ; i<=n ; i++){
        sum+= factorial(i)
    }
    return sum
}

console.log(sum(5))