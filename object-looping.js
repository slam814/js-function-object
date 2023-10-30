let shoppingCart ={ 
    computer: 11, 
    mobile: 3, 
    mouse: 15, 
    Book: 33, 
    pen: 50 };

    var shoppingKey = Object.keys(shoppingCart);


    for(var i = 0; i < shoppingKey.length; i++){

        var shoppingName = shoppingKey[i];

        var ShoppingValue = shoppingCart[shoppingName];

        console.log(shoppingName, ShoppingValue );
    }


    console.log(shoppingKey);

// for in Loop 

for(var propertyName in shoppingCart){

    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

