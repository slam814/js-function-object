var shapingCart ={

    computer: 11,
    mobile: 3,
    mouse: 4, 
    Book: 33,
    pen: 50

}



var properties = Object.keys(shapingCart);

var propertyName = 'mouse';
var propertyValue =shapingCart[propertyName];


var valueOfProperty = Object.values(shapingCart);

// Set property values 
console.log(shapingCart);

shapingCart.mouse = 15; // chenge Num 1
console.log(shapingCart);
shapingCart['mouse'] = 29; // chenge Num 2
console.log(shapingCart);


shapingCart[propertyName] = 89; // chenge Num 3
console.log(shapingCart);


console.log(propertyName, propertyValue);

// console.log(properties.length);
// console.log(valueOfProperty.length);


