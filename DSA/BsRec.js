function binary(arr, target, left = 0, right = arr.length-1){
    if(left > right){
        return -1
    }

    let mid = Math.floor((left+right)/2)

    if(arr[mid]==target){
        return mid
    }

    if(target<arr[mid]){
        return binary(arr, target, left, mid-1)
    }
    return binary(arr, target, mid+1, right)
}

console.log(binary([1,2,3,4,5,6,7], 4))