let a=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<a.length;i++){
    let flag=true
    if(a[i]==1)continue
    for(let j=2;j<=a[i]/2;j++){
        if(a[i]%j==0){
            flag=false
            break
        }
    }
    if(flag==true){
        a[i]=0
    }
}
console.log(a)


// let a=[1,2,3,4,5]
// for(let i=0;i<a.length;i++){
//     let flag=true
//     if(a[i]==1)continue
//     for(let j=2;j<=a[i]/2;j++){
//         if(a[i]%j==0){
//             flag=false
//             break
//         }
//     }
//     if(flag){
//         for(let k=i;k<a.length-1;k++){
//             a[k]=a[k+1]
//         }
//         i--
//         a.length--
//     }
// }
// console.log(a)