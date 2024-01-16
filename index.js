function alert(element) {
    console.log(element);
}

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        collection.forEach(element => callback(element));
    } else if (typeof collection === 'object' && collection !== null) {
        const newArray = Object.values(collection);
        newArray.forEach(element => callback(element));
    }
    return collection;
}

myEach([1, 2, 3], alert); 
myEach({ one: 1, two: 2, three: 3 }, alert); 


function myMap(collection, callback) {
    let newCollection;

    if (Array.isArray(collection)) {
        newCollection = collection.map(element => callback(element));
    } else if (typeof collection === 'object' && collection !== null) {
        newCollection = Object.entries(collection).map(([key, value]) => callback(value, key));
    }

    return newCollection;
}

console.log(myMap([1, 2, 3], function(num) { return num * 3; }));
console.log(myMap({ one: 1, two: 2, three: 3 }, function(num, key) { return num * 3; }));

function myReduce(collection, callback, acc) {
    const values = Object.values(collection);
    
    if (acc !== undefined) {
        return values.reduce(callback, acc);
    } else {
        return values.slice(1).reduce(callback, values[0]);
    }
}

console.log(myReduce([1, 2, 3], function(acc, val) {
    return acc + val;
}, 10)); 


console.log(myReduce({ one: 1, two: 2, three: 3 }, function(acc, val) {
    return acc + val;
})); 


function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    for (const value of values) {
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}


console.log(myFind([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
})); 

console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, function(num) {
    return num % 2 == 0;
})); 


function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    const filteredArray = [];
    for (const value of values) {
        if (predicate(value)) {
            filteredArray.push(value);
        }
    }

    return filteredArray;
}

console.log(myFilter([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
})); 

console.log( myFilter({ one: 1, three: 3, five: 5 }, function(num) {
    return num % 2 == 0;
})); 

function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.length;
}

console.log(mySize({ one: 1, two: 2, three: 3 })); 
console.log(mySize([])); 

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

const firstElement = myFirst([5, 4, 3, 2, 1]);
console.log(firstElement); 

const firstThreeElements = myFirst([5, 4, 3, 2, 1], 3);
console.log(firstThreeElements); 

function myLast(array, n = 1) {
    const lastIndex = array.length - 1;

    return n === 1 ? array[lastIndex] : array.slice(Math.max(lastIndex - n + 1, 0));
}

const lastElement = myLast([5, 4, 3, 2, 1]);
console.log(lastElement); 

const lastThreeElements = myLast([5, 4, 3, 2, 1], 3);
console.log(lastThreeElements); 

function myKeys(object) {
    return Object.keys(object);
}

const keysArray = myKeys({ one: 1, two: 2, three: 3 });
console.log(keysArray); 

function myValues(object) {
    return Object.values(object);
}

const valuesArray = myValues({ one: 1, two: 2, three: 3 });
console.log(valuesArray); 