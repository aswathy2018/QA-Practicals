let sum = 0
let count = 0
let num=1

while(count<5){
    let mult = num*3

    if(mult%2==0){
        sum+=mult
        count++
    }
    num++
}

console.log(sum);