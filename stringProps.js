// Write a function which returns the string properties of an object. 

const movie = {
    name: 'Big Movie',
    releaseYear: 1983,
    rating: 4.5,
    director: 'Big guy'
        
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);

};