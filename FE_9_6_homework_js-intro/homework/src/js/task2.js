// Your code goes here
const firstSide=parseFloat(prompt('enter first side of triangle'));
const secondSide=parseFloat(prompt('enter second side of triangle'));
const angel=parseFloat(prompt('enter angel between sides'));
const coef= +'180'/angel;
const cosinus=Math.cos(Math.PI/coef);
const thirdSide=Math.sqrt(Math.pow(+firstSide,2)+Math.pow(+secondSide,2)-2*(firstSide*secondSide*cosinus));
const perimetr=+firstSide+ +secondSide+ +thirdSide;
const sinus=Math.sin(Math.PI/coef);
const square=1/2*firstSide*secondSide*sinus;
if(firstSide<=0 || secondSide<=0 || angel<=0){
    alert('Invalid data');
}else if(isNaN(firstSide) || isNaN(secondSide) || isNaN(angel)){
    alert('Invalid data');
}else{
    console.log('c length:  '+ thirdSide.toFixed(2) +'\n'+
        'Triangle square: ' + square.toFixed(2) +'\n' +
        'Triangle perimeter: ' + perimetr.toFixed(2) );
}