let arr = [1,2,3,4,3,1,4,2]
let length = 0

while(arr[length]!=undefined){
    length++
}

for(let i=0 ; i<length-1 ; i++){
    arr[i] = arr[i]                                                                                                                                                                     
}

// let i=0
// while(i<length-1){
//     arr[i]=arr[i]
//     i++
// }

for(let j=0 ; j<length-1 ; j++){
    console.log(arr[j]);
}