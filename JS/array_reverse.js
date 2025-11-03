let arr = [1,2,3,4,3,1,4,2]
let temp = []

for(let i=arr.length/2 ; i>=0 ; i--){
    temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
}
console.log('Reveresed array: ',arr)



// let arr=101
// let sum = 0

// arr=arr+""

// for(let i=0  ;i<arr.length ; i++){
//     sum+=+arr[i]
// }

// console.log('Sum: ', sum)