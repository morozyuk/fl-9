function isClosestToZero(arr){
    let theClothest =+arr[0];
    for(let i =0 ; i<arr.length ; i++){
        if(Math.abs(+arr[i])<Math.abs(theClothest)){
            theClothest = arr[i]
        }
    }
    return console.log(theClothest)
}
