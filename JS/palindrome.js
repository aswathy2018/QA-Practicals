let str = "MALAYALAM"
let val = ""

for(let i=str.length-1 ; i>=0 ; i--){
    val+=str[i]
}

if(val===str){
    console.log(true);
}else{
    console.log(false);
}
