function sumOf(obj){
    let sum = 0
    
    for(let key in obj){
        if(typeof obj[key]=="number"){
            sum+=obj[key]
        }else if(typeof obj[key]=="object"){
            sum+=sumOf(obj[key])
        }
    }
    return sum
}

const data = {
  a: 10,
  b: { c: 20, d: { e: 30 } },
  f: 40
};

console.log(sumOf(data))