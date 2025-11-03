let a=[11,5,1,11,2,1,2,3,3,1,5,5]

for(let i=0 ; i<a.length ; i++){
    for(let j=i+1 ; j<a.length ; j++){
        if(a[i]==a[j]){
            for(let k=i ; k<a.length-1 ; k++){
                a[k]=a[k+1]
            }
            a.length--
            i--
        }
    }
}

console.log(a)