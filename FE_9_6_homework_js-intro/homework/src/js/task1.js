// Your code goes here
const price=parseFloat(prompt('enter price'));
const discount=parseFloat(prompt('enter discount'));
const savedPrice= price/100*discount;
const priceWithDiscount= price-price/100*discount;
if( price<= 0 || discount<0 || discount>=100) {
    alert('Invalid data')
}else if(isNaN(price)|| isNaN(discount)){
    alert('Invalid data')
}else {
    console.log('Price without discount:  ' + price + '\n'
        + 'Discount: ' + discount + '\n'
        + 'Price with discount: ' + priceWithDiscount.toFixed(2) + '\n'
        + 'Saved: ' + savedPrice.toFixed(2));
}