function reverseNumber(n) {
    let result;
    if(n<0){
        let numb = +Math.abs(n);
        result=`-${numb.toString().split('').reverse().join('')}`;
    }else{
        result=n.split('').reverse().join('');
    }
    return console.log(parseInt(result));
}
