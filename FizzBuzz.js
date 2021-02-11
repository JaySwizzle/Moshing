//Divisible by 3 ==> Fizz
//Divisible by 5 ==> Buzz
//Divisible by both 3 and 5 ==> FizzBuzz
//Not divisible by 3 or 5 ==> Input
//Not a number ==> 'Not a number'

const output = fizzBuzz();

function fizzBuzz(input) {
    const input = 11;
    let outputA;
    let outpubB;

    outputB = (input / 5);
    outputA = (input / 3);

    if (outputA == true && outpubB == false) return 'Fizz';
    else if (outputA == false && outputB == true) return 'Buzz';
    else    
        if (outputA && outputB == true) return 'FizzBuzz';
};

console.log(output);
