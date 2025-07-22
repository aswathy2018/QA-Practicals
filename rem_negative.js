let obj={
    a: 12,
    b: -39,
    c:10,
    d: -11
}
let arr=[]
let index=0
for(let i in obj){
    if(obj[i]<0){
     arr[index]=obj[i]
     index++
    }
}
console.log(arr)