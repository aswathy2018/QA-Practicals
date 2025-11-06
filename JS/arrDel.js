// let arr = [1,3,2,4,5,6]

// arr.splice(4,1)

// console.log(arr);


let arr = [3,2,5,6,7,1]

let newArr = []

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]!==6){
        newArr[newArr.length] = arr[i]
    }
}

console.log(newArr);