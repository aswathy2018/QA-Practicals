let string  = "welcome to JavaScript"
let str = ""
for(let i=0 ; i<string.length ; i++){
    if(string[i]==' '){
        str+='_'
    }else{
        str+=string[i]
    }
}

console.log(str)


//removing spaces


// let string  = "welcome to JavaScript"
// let str = ""
// for(let i=0 ; i<string.length ; i++){
//     if(string[i]!==' '){
//         str+=string[i]
//     }
// }

// console.log(str)