var shapingCart ={

    computer: 11,
    mobile: 3,
    mouse: 4, 
    Book: 33,
    pen: 50

}



var properties = Object.keys(shapingCart);

var propertyName = 'pen';
var propertyValue =shapingCart[propertyName];

console.log(propertyName, propertyValue);
var valueOfProperty = Object.values(shapingCart);

// console.log(properties.length);
// console.log(valueOfProperty.length);