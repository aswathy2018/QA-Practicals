let str = 'Aswathy is a good girl';
let count = 0;

for (let i = 0; str[i] !== undefined; i++) {
  if (str[i] !== ' ') {
    count++;
  }
}

console.log(count);

// let a=[1,7,2,8,71,18,90]
// for(let i=0;i<a.length;i++){
//     let isPrime=true
//     if(a[i]==1)continue
//     for(let j=2;j<=a[i]/2;j++){
//         if(a[i]%2==0){
//             isPrime=false
//             break
//         }
//     }
//     if(isPrime){
//         a[i]=a[i]*a[i]
//     }
// }

// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         for(let k=i;k<a.length-1;k++){
//             a[k]=a[k+1]
//         }
//         a.length--
//         i--
//     }
// }
// console.log(a)
