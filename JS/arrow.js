// const sum = (a,b)=>a+b

// console.log(sum(3,2))



const sum = (...arr)=>{
    let total = 0
    for(let i=0 ; i<arr.length ; i++){
        total+=arr[i]
    }
    return total
}
console.log(sum(3,2,1,4))