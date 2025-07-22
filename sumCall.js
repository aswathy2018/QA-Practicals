function calc(arr){
    return arr.reduce((acc,val)=>acc+val,0)
}

function sum(arr,callback){
    return callback(arr)
}

console.log(sum([1,2,3,4],calc));
