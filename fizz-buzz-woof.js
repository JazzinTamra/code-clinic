/**
 * Created by Tamra on 2/1/2016.
 */
//"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For multiples of 7 print "Wolf" For numbers which are multiples of both three and five print “FizzBuzz”. And multiples of 3,5 & 7 print "FizzBuzzWolf"

//How would I add strings to get the answer? I don't know how to pass i if Fizz Buzz and Woof are used.

for(var i = 1; i <= 105; i++) {
    var str="";
    if (i % 3 === 0) {
        str += "Fizz"
    } if (i % 5 === 0) {
        str += "Buzz"
    } if (i % 7 === 0) {
        str += "Woof"
    } if(str.indexOf("Fizz") || str.indexOf("Buzz") || str.indexOf("Woof") !== -1) {
        console.log(str);
    } if(str.indexOf("Fizz") && str.indexOf("Buzz") && str.indexOf("Woof") !== 0) {
        console.log(i);
    }
}


////My thought...now working definitely not DRY
//for(var i = 1; i <= 105; i++) {
//    if (i % 105 == 0) {
//    console.log("FizzBuzzWolf");
//    } else if (i % 15 == 0) {
//        console.log("FizzBuzz")
//    } else if (i % 7 == 0) {
//        console.log("Wolf")
//    } else if (i % 5 == 0) {
//        console.log("Buzz");
//    } else if (i % 3 == 0) {
//        console.log("Fizz");
//    }  else {
//        console.log(i);
//    }
//}
////More thoughts after look at answers on the web
//console.log(
//    for(var i = 1; i <= 150; i++) {
//        var isFizz = i % 3 == 0;
//        var isBuzz = i % 5 == 0;
//        var isWolf = i % 7 == 0;
//        var isFizzBuzzWolf = (isFizz && isBuzz && isWolf);
//        var isFizzBuzz = (isFizz && isBuzz);
//
//        if (isFizzBuzzWolf) {
//            console.log('FizzBuzzWolf');
//        } else if (isFizzBuzz) {
//            console.log('FizzBuzz');
//        } else if (isWolf) {
//            console.log('Wolf');
//        } else if (isBuzz) {
//            console.log('Buzz');
//        } else if (isFizz) {
//            console.log('Fizz');
//        } console.log(i);
//}.join("\n"));

//How would I add strings to get the answer? I don't know how to pass i if Fizz Buzz and Woof are used.

for(var i = 1; i <= 105; i++) {
    var str="";
    if (i % 3 == 0) {
        str += "Fizz"
    }
    if (i % 5 == 0) {
        str += "Buzz"
    }
    if (i % 7 == 0) {
        str += "Woof"
    }
    if(str.indexOf("Fizz") || str.indexOf("Buzz") || str.indexOf("Woof") !== -1) {
        console.log(str);
    }
    if(str.indexOf("Fizz") && str.indexOf("Buzz") && str.indexOf("Woof") !== 0) {
        console.log(i);
    }
}



//pulled from web added Wolf
console.log(
    Array.apply(0, Array(105)).map(function (x, y) {
        var nb = y+1;
        var isFizz = ((nb % 3) == 0);
        var isBuzz = ((nb % 5) == 0);
        var isWolf = ((nb % 7) == 0);
        var isFizzBuzzWolf = (isFizz && isBuzz && isWolf);
        var isFizzBuzz = (isFizz && isBuzz);

        if (isFizzBuzzWolf) return 'FizzBuzzWolf';
        if (isFizzBuzz) return 'FizzBuzz';


        if (isFizz) return 'Fizz';
        if (isBuzz) return 'Buzz';
        if (isWolf) return 'Wolf';
        return(nb);
    }).join("\n"));


