function larg(str){
    
    let arr = str.split(' ')
    let first = ''
    let sec = ''
    
    for(let word of arr){
        if(word.length>first.length){
            sec=first
            first=word
        }else if(word.length>sec.length){
            sec=word
        }
    }
    return sec
}

const str = "my name is arjun"

console.log(larg(str))