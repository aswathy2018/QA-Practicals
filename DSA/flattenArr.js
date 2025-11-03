function flatten(arr){
    let res = []

    for(let i=0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatten([[10, 20, 30],[40, 50, [60, 70]],[80, [90, 100, [110, 120]]]]))