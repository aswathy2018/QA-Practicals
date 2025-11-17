function binaryS(arr, target, left = 0 , right = arr.length-1){
    let nextval = null
    
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        
        if(arr[mid]===target){
            return arr[mid]
        }
        
        if(arr[mid]>target){
            nextval = arr[mid]
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return nextval || "No flights"
}


const flights = ['06:30', '08:15', '09:00', '10:45', '13:20', '15:50', '18:10'];

console.log(binaryS(flights, '09:00')); // → "09:00"
console.log(binaryS(flights, '12:00')); // → "13:20"
console.log(binaryS(flights, '19:00')); // → "No flights available after this time"