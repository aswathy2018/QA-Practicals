let arr = [1,2,3,4,5,6,2,7,3,5]
let res = []

for(let i=0 ; i<arr.length ; i++){
    let count = 0

    for(let j=0 ; j<arr.length ; j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    
    if(count==1){
        res.push(arr[i])
    }
}

console.log(res);