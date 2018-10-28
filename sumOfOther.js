function sumOfOther(arr) {
    for(i=0, sumEl=0, count=arr.length; i<count; i++){
        sumEl += arr[i];
    }
    return arr.map((curr, index, arr) => sumEl - arr[index]);  
}