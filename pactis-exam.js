function make_avg(a, b, c, d, e){

    const totalNumber = a + b + c + d + e ;

    const avgNumber = totalNumber / make_avg.length;

    
    console.log(make_avg.length);
    
    return avgNumber;

}


var avg = make_avg(10, 10, 10, 10, 60);
console.log(`The average is: `, avg)