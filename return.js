function bringSingara(money){
    var singaraPrice = 10;
   
    var quantity = money / singaraPrice;

    return quantity;
    
    
}

var myTaka = 455;
var singaras = bringSingara(myTaka);
// console.log('Eting Singara', singaras, )

function getAvarage(assignment1, assignment2, assignment3 ){
    const total = assignment1 + assignment1 + assignment3;
    const avarage = total / 3;
    return avarage;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
myAverage = myAverage.toFixed(1);
myAverage = parseFloat(myAverage);
console.log('my Average so fr: ', myAverage);

