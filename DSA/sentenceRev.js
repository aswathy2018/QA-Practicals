function sent(str){
    let stack = []
    let res = ""

    for(let i=0 ; i<str.length ; i++){
        if(str[i]!==" "){
            stack.push(str[i])
        }else{
            while(stack.length>0){
                res+=stack.pop()
            }
            res+=" "
        }
    }

    while(stack.length>0){
        res+=stack.pop()
    }
    return res
}
console.log(sent("Hello World"));