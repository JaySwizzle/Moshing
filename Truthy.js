// Create a function that counts the number of truthy values in an array


const array = [0,'lame','3', NaN ,5,8]

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
    count++;
    return count;


}