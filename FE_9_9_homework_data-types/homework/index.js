function findType(argument) {
    return typeof argument
}

function forEach(arr, something){
    for(let i=0; i<arr.length ; i++){
        something(arr[i]);
    }
}

function map(arr, something){
    let transformedArr=[];
    forEach(arr, function (element){
        transformedArr.push(something(element));
    });
    console.log(transformedArr)
}

function filter(arr, something){
    let filtredArr=[];
    forEach(arr, function (element) {
        if(something(element)){
            filtredArr.push(something(element))
        }
    });
    console.log(filtredArr)
}

function getAdultAppleLovers(arr){
    forEach(arr, function(element){
        if(element.age > 18 && element. favouriteFruit === 'apple') {
            return console.log(element.name)
        }
    });

}
function keys(arr){
    let arrKeys=[];
    for(let keys in arr){
        if(arr.hasOwnProperty(keys)){
            arrKeys.push(keys)
        }
    }
    console.log(arrKeys)
}

function values(arr){
    let arrValues=[];
   for(let key in arr){
       if(arr.hasOwnProperty(key)){
           arrValues.push(arr[key])
       }
   }
    console.log(arrValues)
}

function showFormattedDate(date){
    let months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` ];
    return console.log(`It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`);
}
